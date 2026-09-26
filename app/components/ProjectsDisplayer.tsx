'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ProjectProps } from './projects'
import ProjectCard from './ProjectCard'
import type { Locale } from './locale'

type ProjectsDisplayerProps = {
  projects: ProjectProps[]
  locale: Locale
  glitchyTextDensity: number
  priorityVideoSources: ReadonlySet<string>
  onVideoSettled: (src: string) => void
}

function ProjectsDisplayer({
  projects,
  locale,
  glitchyTextDensity,
  priorityVideoSources,
  onVideoSettled,
}: ProjectsDisplayerProps) {
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const cardRefCallbacks = useRef<Map<string, (el: HTMLDivElement | null) => void>>(new Map())
  const projectIds = useMemo(() => new Set(projects.map((project) => project.id)), [projects])
  const projectIdsRef = useRef(projectIds)
  projectIdsRef.current = projectIds

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setVisibleIds(new Set(projectIdsRef.current))
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleIds((previousIds) => {
          let nextIds: Set<string> | null = null

          entries.forEach((entry) => {
            const id = (entry.target as HTMLElement).dataset.projectId
            if (!id || !projectIdsRef.current.has(id)) return

            const shouldBeVisible = entry.isIntersecting
            const isVisible = (nextIds ?? previousIds).has(id)
            if (shouldBeVisible === isVisible) return

            if (!nextIds) nextIds = new Set(previousIds)
            if (shouldBeVisible) nextIds.add(id)
            else nextIds.delete(id)
          })

          return nextIds ?? previousIds
        })
      },
      { rootMargin: '300px 0px' }
    )

    cardRefs.current.forEach((element) => observerRef.current?.observe(element))
    return () => observerRef.current?.disconnect()
  }, [])

  useEffect(() => {
    setVisibleIds((previousIds) => {
      if (typeof IntersectionObserver === 'undefined') {
        const unchanged = previousIds.size === projectIds.size
          && [...projectIds].every((id) => previousIds.has(id))
        return unchanged ? previousIds : new Set(projectIds)
      }

      const removedIds = [...previousIds].filter((id) => !projectIds.has(id))
      if (removedIds.length === 0) return previousIds

      const nextIds = new Set(previousIds)
      removedIds.forEach((id) => nextIds.delete(id))
      return nextIds
    })

    cardRefs.current.forEach((element, id) => {
      if (projectIds.has(id)) return
      observerRef.current?.unobserve(element)
      cardRefs.current.delete(id)
    })

    cardRefCallbacks.current.forEach((_, id) => {
      if (!projectIds.has(id)) cardRefCallbacks.current.delete(id)
    })
  }, [projectIds])

  const getCardRef = useCallback((id: string) => {
    const existingCallback = cardRefCallbacks.current.get(id)
    if (existingCallback) return existingCallback

    const callback = (element: HTMLDivElement | null) => {
      const previousElement = cardRefs.current.get(id)
      if (previousElement === element) return
      if (previousElement) observerRef.current?.unobserve(previousElement)

      if (element) {
        cardRefs.current.set(id, element)
        observerRef.current?.observe(element)
      } else {
        cardRefs.current.delete(id)
      }
    }
    cardRefCallbacks.current.set(id, callback)
    return callback
  }, [])

  const cards = useMemo(() => projects.map((project, index) => {
    const previewSource = project.preview?.src
    const videoSource = previewSource?.match(/\.(mp4|webm)$/)
      ? `/${previewSource.replace(/^\/+/, '')}`
      : undefined

    return (
      <div key={project.id} data-project-id={project.id} ref={getCardRef(project.id)} className="lg:max-w-[70%] xl:max-w-[45%] w-full max-w-[100%] flex">
        <ProjectCard
          index={index}
          locale={locale}
          glitchyTextDensity={visibleIds.has(project.id) ? glitchyTextDensity : 0}
          prepareImmediately={!!videoSource && priorityVideoSources.has(videoSource)}
          onVideoSettled={onVideoSettled}
          {...project}
        />
      </div>
    )
  }), [projects, locale, glitchyTextDensity, visibleIds, getCardRef, priorityVideoSources, onVideoSettled])

  return (
    <div className="flex flex-row flex-wrap justify-start gap-20 h-full items-stretch basis-0 overflow-hidden relative mt-12">
      <div className="fixed inset-0 -z-10" style={{ backdropFilter: 'blur(100px)', WebkitBackdropFilter: 'blur(100px)', willChange: 'transform' }} />
      {cards}
    </div>
  )
}

export default ProjectsDisplayer
