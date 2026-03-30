'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ProjectProps } from './projects'
import ProjectCard from './ProjectCard'

function ProjectsDisplayer({ projects, glitchyTextDensity }: { projects: ProjectProps[], glitchyTextDensity: number }) {
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev)
          entries.forEach((entry) => {
            const id = (entry.target as HTMLElement).dataset.projectId
            if (!id) return
            if (entry.isIntersecting) next.add(id)
            else next.delete(id)
          })
          return next
        })
      },
      { rootMargin: '300px 0px' }
    )

    cardRefs.current.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [projects])

  const setCardRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      cardRefs.current.set(id, el)
      observerRef.current?.observe(el)
    } else {
      const prev = cardRefs.current.get(id)
      if (prev) observerRef.current?.unobserve(prev)
      cardRefs.current.delete(id)
    }
  }, [])

  const cards = useMemo(() => projects.map((project, id) => (
    <div key={project.id} data-project-id={project.id} ref={setCardRef(project.id)} className="lg:max-w-[70%] xl:max-w-[45%] w-full max-w-[100%] flex">
      <ProjectCard
        index={id}
        glitchyTextDensity={visibleIds.has(project.id) ? glitchyTextDensity : 0}
        {...project}
      />
    </div>
  )), [projects, glitchyTextDensity, visibleIds, setCardRef])

  return (
    <div className="flex flex-row flex-wrap justify-start gap-20 h-full items-stretch basis-0 overflow-hidden relative mt-12">
      <div className="fixed inset-0 -z-10" style={{ backdropFilter: 'blur(100px)', WebkitBackdropFilter: 'blur(100px)', willChange: 'transform' }} />
      {cards}
    </div>
  )
}

export default ProjectsDisplayer
