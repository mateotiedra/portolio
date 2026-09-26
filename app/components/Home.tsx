'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { RiArrowDownDoubleFill } from 'react-icons/ri'
import GlitchyTextContainer from './GlitchyTextContainer'
import ScrollSpeedTracker from './ScrollSpeedTracker'
import ProjectsDisplayer from './ProjectsDisplayer'
import Loading from './Loading'
import Footer from './Footer'
import { projectsEn, ProjectProps } from './projects'
import CategoryChooser from './CategoryChooser'

const STARTUP_MAX_WAIT_MS = 8000

function TitleSection({ glitchyTextDensity }: { glitchyTextDensity: number }) {
  const downIndicatorRef = useRef<HTMLDivElement>(null)
  const stickyIndicatorRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)
  const projectsColor = useMemo(() => projectsEn.map((proj) => proj.color), [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')
    let frame = 0
    let listeningForScroll = false
    let hasScrolled = window.scrollY > 0
    let fullyHiddenFromScrollY: number | null = null


    const updateArrow = () => {
      frame = 0
      const container = downIndicatorRef.current
      const sticky = stickyIndicatorRef.current
      const arrow = arrowRef.current
      if (!container || !sticky || !arrow) return
      if (fullyHiddenFromScrollY !== null && window.scrollY >= fullyHiddenFromScrollY) {
        if (sticky.style.opacity !== '0') sticky.style.opacity = '0'
        const nextAnimation = hasScrolled ? '' : 'bounce 1.5s infinite'
        if (arrow.style.animation !== nextAnimation) arrow.style.animation = nextAnimation
        return
      }


      const containerRect = container.getBoundingClientRect()
      const stickyRect = sticky.getBoundingClientRect()
      const opacity = 1 - (
        (stickyRect.top - containerRect.top)
        / (containerRect.height - stickyRect.height || 1)
      )
      if (opacity <= 0) fullyHiddenFromScrollY = window.scrollY


      const nextOpacity = String(opacity)
      const nextAnimation = hasScrolled ? '' : 'bounce 1.5s infinite'
      if (sticky.style.opacity !== nextOpacity) sticky.style.opacity = nextOpacity
      if (arrow.style.animation !== nextAnimation) arrow.style.animation = nextAnimation
    }

    const scheduleArrowUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateArrow)
    }

    const onScroll = () => {
      hasScrolled = true
      if (fullyHiddenFromScrollY !== null && window.scrollY >= fullyHiddenFromScrollY) return
      scheduleArrowUpdate()
    }

    const reconcileBreakpoint = () => {
      const sticky = stickyIndicatorRef.current
      const arrow = arrowRef.current
      fullyHiddenFromScrollY = null


      if (media.matches) {
        if (!listeningForScroll) {
          window.addEventListener('scroll', onScroll, { passive: true })
          listeningForScroll = true
        }
        scheduleArrowUpdate()
        return
      }

      if (listeningForScroll) {
        window.removeEventListener('scroll', onScroll)
        listeningForScroll = false
      }
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
      if (sticky && sticky.style.opacity !== '1') sticky.style.opacity = '1'
      const nextAnimation = hasScrolled ? '' : 'bounce 1.5s infinite'
      if (arrow && arrow.style.animation !== nextAnimation) arrow.style.animation = nextAnimation
    }

    reconcileBreakpoint()
    media.addEventListener('change', reconcileBreakpoint)
    window.addEventListener('resize', reconcileBreakpoint, { passive: true })

    return () => {
      if (listeningForScroll) window.removeEventListener('scroll', onScroll)
      media.removeEventListener('change', reconcileBreakpoint)
      window.removeEventListener('resize', reconcileBreakpoint)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const titleTextRotatedClassName = 'absolute h-0 w-0 leading-[0px] flex justify-start text-[55vw] uppercase font-bold rotate-90 top-0 left-0'
  const titleTextFlatClassName = 'uppercase font-bold text-[14vw] max-text-[30px]'

  return (
    <>
      {/* Mobile */}
      <div className="overflow-hidden sm:hidden">
        <div className="relative flex justify-between w-[100vw] h-[280vw]">
          <div className="absolute flex justify-center w-[100%] pt-[24vw] z-30">
            <Image className="relative rotate-180 w-[90vw]" src="/images/landing-shark-white.webp" alt="White hammer shark" width={900} height={450} sizes="(max-width: 639px) 90vw, 23vw" priority />
          </div>
          <div className="absolute flex justify-between h-[100vh] w-[100%] px-[10vw] overflow">
            <div className="relative top-[-3vw] left-[20vw]">
              <GlitchyTextContainer colors={projectsColor} variant="h1" density={glitchyTextDensity + 0.04} className={titleTextRotatedClassName}>
                Mateo
              </GlitchyTextContainer>
            </div>
            <div className="relative top-[80vw] right-[16vw]">
              <GlitchyTextContainer colors={projectsColor} variant="h1" density={glitchyTextDensity + 0.04} className={titleTextRotatedClassName}>
                Tiedra
              </GlitchyTextContainer>
            </div>
          </div>
        </div>
        <div ref={downIndicatorRef} className="absolute left-[21vw] top-[180vw] h-[84vw] flex flex-col justify-end">
          <div ref={stickyIndicatorRef} className="sticky bottom-[2vh]" style={{ opacity: 1 }}>
            <span ref={arrowRef} className="block w-[13vw] h-[13vw]" style={{ animation: 'bounce 1.5s infinite' }}>
              <RiArrowDownDoubleFill className="w-full h-full text-white" />
            </span>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col justify-center items-center h-[80vh] mb-[10vh] max-w-[1375px] mx-auto">
        <div className="absolute flex justify-center w-[23%] left-[45%] -translate-x-1/2 z-30">
          <Image className="relative -rotate-90" src="/images/landing-shark-white.webp" alt="White hammer shark" width={900} height={450} sizes="(max-width: 639px) 90vw, 23vw" />
        </div>
        <div className="relative">
          <GlitchyTextContainer variant="h1" density={glitchyTextDensity + 0.04} className={titleTextFlatClassName} colors={projectsColor}>
            Mateo
          </GlitchyTextContainer>
        </div>
        <div className="relative">
          <GlitchyTextContainer variant="h1" density={glitchyTextDensity + 0.04} className={titleTextFlatClassName} colors={projectsColor}>
            Tiedra
          </GlitchyTextContainer>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  const canUpdateDensity = useRef(true)
  const pulseResetTimeout = useRef<number | null>(null)
  const [glitchyTextDensity, setGlitchyTextDensity] = useState(0)

  const updateGlitchyTextDensity = useCallback((scrollSpeed: number) => {
    if (canUpdateDensity.current && scrollSpeed > 100) {
      setGlitchyTextDensity(Math.max(Math.min(scrollSpeed / 10000, 1), 0))
      canUpdateDensity.current = false
      pulseResetTimeout.current = window.setTimeout(() => {
        canUpdateDensity.current = true
        setGlitchyTextDensity(0)
        pulseResetTimeout.current = null
      }, 300)
    }
  }, [])

  useEffect(() => () => {
    clearTimeout(pulseResetTimeout.current ?? undefined)
  }, [])

  const [loading, setLoading] = useState(true)
  const [shownProjects, setShownProjects] = useState<ProjectProps[]>(projectsEn)
  const completedImages = useRef<Set<string>>(new Set())
  const pendingImages = useRef<Map<string, Promise<void>>>(new Map())
  const settledVideos = useRef<Set<string>>(new Set())
  const startupImagesRef = useRef<ReadonlySet<string>>(new Set())
  const priorityVideosRef = useRef<ReadonlySet<string>>(new Set())
  const fontsSettled = useRef(false)
  const startupMounted = useRef(false)
  const released = useRef(false)
  const targetGeneration = useRef(0)
  const releaseReason = useRef<'ready' | 'deadline' | null>(null)
  const releaseFrameOne = useRef(0)
  const releaseFrameTwo = useRef(0)
  const releaseDelay = useRef<number | null>(null)
  const deadline = useRef<number | null>(null)
  const checkReadinessRef = useRef<() => void>(() => {})

  const startupImageSources = useMemo(() => {
    const sources = new Set<string>([
      '/images/landing-shark-white.webp',
      '/images/noisy-filter.png',
    ])

    shownProjects.forEach((project) => {
      const preview = project.preview
      if (!preview) return

      if (preview.src.match(/\.(mp4|webm)$/)) {
        if (preview.poster) sources.add(`/${preview.poster.replace(/^\/+/, '')}`)
      } else {
        sources.add(`/${preview.src.replace(/^\/+/, '')}`)
      }
    })

    return sources
  }, [shownProjects])

  const priorityVideoSources = useMemo(() => {
    const sources = new Set<string>()
    shownProjects.slice(0, 2).forEach((project) => {
      const source = project.preview?.src
      if (source?.match(/\.(mp4|webm)$/)) {
        sources.add(`/${source.replace(/^\/+/, '')}`)
      }
    })
    return sources
  }, [shownProjects])

  startupImagesRef.current = startupImageSources
  priorityVideosRef.current = priorityVideoSources

  const cancelReleaseSchedule = useCallback(() => {
    cancelAnimationFrame(releaseFrameOne.current)
    cancelAnimationFrame(releaseFrameTwo.current)
    clearTimeout(releaseDelay.current ?? undefined)
    releaseFrameOne.current = 0
    releaseFrameTwo.current = 0
    releaseDelay.current = null
    releaseReason.current = null
  }, [])

  const scheduleRelease = useCallback((reason: 'ready' | 'deadline') => {
    if (!startupMounted.current || released.current || releaseReason.current) return
    releaseReason.current = reason
    releaseFrameOne.current = requestAnimationFrame(() => {
      releaseFrameOne.current = 0
      releaseFrameTwo.current = requestAnimationFrame(() => {
        releaseFrameTwo.current = 0
        releaseDelay.current = window.setTimeout(() => {
          releaseDelay.current = null
          if (!startupMounted.current || released.current) return
          released.current = true
          clearTimeout(deadline.current ?? undefined)
          setLoading(false)
        }, 150)
      })
    })
  }, [])

  checkReadinessRef.current = () => {
    if (
      !startupMounted.current
      || released.current
      || !fontsSettled.current
      || ![...startupImagesRef.current].every((source) => completedImages.current.has(source))
      || ![...priorityVideosRef.current].every((source) => settledVideos.current.has(source))
    ) return

    scheduleRelease('ready')
  }

  const onVideoSettled = useCallback((src: string) => {
    settledVideos.current.add(`/${src.replace(/^\/+/, '')}`)
    checkReadinessRef.current()
  }, [])

  useEffect(() => {
    startupMounted.current = true
    deadline.current = window.setTimeout(() => scheduleRelease('deadline'), STARTUP_MAX_WAIT_MS)

    const fontReadiness = 'fonts' in document ? document.fonts.ready : Promise.resolve()
    Promise.resolve(fontReadiness).then(
      () => {
        if (!startupMounted.current) return
        fontsSettled.current = true
        checkReadinessRef.current()
      },
      () => {
        if (!startupMounted.current) return
        fontsSettled.current = true
        checkReadinessRef.current()
      }
    )

    return () => {
      startupMounted.current = false
      clearTimeout(deadline.current ?? undefined)
      deadline.current = null
      cancelReleaseSchedule()
    }
  }, [cancelReleaseSchedule, scheduleRelease])

  useEffect(() => {
    if (!loading) return

    const generation = ++targetGeneration.current
    if (releaseReason.current === 'ready') cancelReleaseSchedule()

    startupImageSources.forEach((source) => {
      if (completedImages.current.has(source)) return

      let request = pendingImages.current.get(source)
      if (!request) {
        request = new Promise<void>((resolve) => {
          const image = new window.Image()
          let settled = false

          const finish = () => {
            if (settled) return
            settled = true
            image.onload = null
            image.onerror = null
            resolve()
          }

          const decodeLoadedImage = () => {
            if (typeof image.decode === 'function') image.decode().then(finish, finish)
            else finish()
          }

          image.onload = decodeLoadedImage
          image.onerror = finish
          image.src = source

          if (image.complete) {
            if (image.naturalWidth > 0) decodeLoadedImage()
            else finish()
          }
        })
        pendingImages.current.set(source, request)
      }

      request.then(() => {
        pendingImages.current.delete(source)
        completedImages.current.add(source)
        if (startupMounted.current && targetGeneration.current === generation) {
          checkReadinessRef.current()
        }
      })
    })

    checkReadinessRef.current()
  }, [loading, startupImageSources, priorityVideoSources, cancelReleaseSchedule])


  return (
    <div className="noise-container">
      <Loading loading={loading} />
      <ScrollSpeedTracker onChange={updateGlitchyTextDensity} />
      <div style={{ opacity: loading ? 0 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
        <TitleSection glitchyTextDensity={glitchyTextDensity} />
        <div className="section-container">
          <CategoryChooser glitchyTextDensity={glitchyTextDensity} setShownProjects={setShownProjects} />
          <ProjectsDisplayer
            projects={shownProjects}
            glitchyTextDensity={glitchyTextDensity}
            priorityVideoSources={priorityVideoSources}
            onVideoSettled={onVideoSettled}
          />
        </div>
      </div>
      {shownProjects.length < projectsEn.length && (
        <div className="w-full flex justify-center">
          <span className="text-white underline cursor-pointer" onClick={() => { window.location.href = '/' }}>
            See all projects
          </span>
        </div>
      )}
      <Footer />
    </div>
  )
}
