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

function TitleSection({ glitchyTextDensity }: { glitchyTextDensity: number }) {
  const downIndicatorRef = useRef<HTMLDivElement>(null)
  const projectsColor = useMemo(() => projectsEn.map((proj) => proj.color), [])
  const [indicatorOpacity, setIndicatorOpacity] = useState(1)
  const [stickyJump, setStickyJump] = useState(true)

  const onScroll = useCallback(() => {
    if (!downIndicatorRef.current) return
    const containerRect = downIndicatorRef.current.getBoundingClientRect()
    const stickyRect = downIndicatorRef.current.children[0].getBoundingClientRect()
    setStickyJump(false)
    setIndicatorOpacity(
      1 - (stickyRect.top - containerRect.top) / (containerRect.height - stickyRect.height || 1)
    )
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const titleTextRotatedClassName = 'absolute h-0 w-0 leading-[0px] flex justify-start text-[55vw] uppercase font-bold rotate-90 top-0 left-0'
  const titleTextFlatClassName = 'uppercase font-bold text-[14vw] max-text-[30px]'

  return (
    <>
      {/* Mobile */}
      <div className="overflow-hidden sm:hidden">
        <div className="relative flex justify-between w-[100vw] h-[280vw]">
          <div className="absolute flex justify-center w-[100%] pt-[24vw] z-30">
            <img className="relative rotate-180 w-[90vw]" src="/images/landing-shark-white.png" alt="White hammer shark" />
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
          <div className="sticky bottom-[2vh]" style={{ opacity: indicatorOpacity }}>
            <RiArrowDownDoubleFill className="w-[13vw] h-[13vw] text-white" style={{ animation: stickyJump ? 'bounce 1.5s infinite' : '' }} />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col justify-center items-center h-[80vh] mb-[10vh] max-w-[1375px] mx-auto">
        <div className="absolute flex justify-center w-[23%] left-[45%] -translate-x-1/2 z-30">
          <img className="relative -rotate-90" src="/images/landing-shark-white.png" alt="White hammer shark" />
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
  const [glitchyTextDensity, setGlitchyTextDensity] = useState(0)

  const updateGlitchyTextDensity = useCallback((scrollSpeed: number) => {
    if (canUpdateDensity.current && scrollSpeed > 100) {
      setGlitchyTextDensity(Math.max(Math.min(scrollSpeed / 10000, 1), 0))
      canUpdateDensity.current = false
      setTimeout(() => {
        canUpdateDensity.current = true
        setGlitchyTextDensity(0)
      }, 300)
    }
  }, [])

  const [loading, setLoading] = useState(true)

  const stopLoadWithDelay = useCallback(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  useEffect(() => {
    window.addEventListener('load', stopLoadWithDelay)
    const timeout = setTimeout(stopLoadWithDelay, 3000)
    return () => {
      window.removeEventListener('load', stopLoadWithDelay)
      clearTimeout(timeout)
    }
  }, [stopLoadWithDelay])

  const [shownProjects, setShownProjects] = useState<ProjectProps[]>(projectsEn)

  return (
    <div className="noise-container">
      <Loading loading={loading} />
      <ScrollSpeedTracker onChange={updateGlitchyTextDensity} />
      <div style={{ display: loading ? 'none' : 'block' }}>
        <TitleSection glitchyTextDensity={glitchyTextDensity} />
        <CategoryChooser glitchyTextDensity={glitchyTextDensity} setShownProjects={setShownProjects} />
        <ProjectsDisplayer projects={shownProjects} glitchyTextDensity={glitchyTextDensity} />
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
