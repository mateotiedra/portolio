'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { projectsEn } from './projects'
import GlitchyTextContainer from './GlitchyTextContainer'

const easeInOutQuad = (t: number, min: number, max: number) => {
  const range = max - min
  const easedValue = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  return min + easedValue * range
}

function Loading({ loading }: { loading: boolean }) {
  const [tFactor, setTFactor] = useState(0)
  const nextAnimate = useRef<NodeJS.Timeout | null>(null)
  const loadingRef = useRef(loading)

  useEffect(() => {
    loadingRef.current = loading
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    if (!loading && nextAnimate.current) {
      clearTimeout(nextAnimate.current)
      nextAnimate.current = null
    }
    return () => { document.body.style.overflow = '' }
  }, [loading])

  const animate = useCallback((prevDirection: number) => {
    if (!loadingRef.current) return

    setTFactor((prev) => {
      let nextDirection = prevDirection
      let nextT = prev + nextDirection * 0.1
      if (nextT <= 0) { nextDirection = 1; nextT = 0 }
      else if (nextT >= 1) { nextDirection = -1; nextT = 1 }

      if (nextAnimate.current) clearTimeout(nextAnimate.current)
      if (loadingRef.current) {
        nextAnimate.current = setTimeout(() => animate(nextDirection), 60 + 60 * (1 - nextT))
      }
      return nextT
    })
  }, [])

  useEffect(() => {
    animate(1)
    return () => { if (nextAnimate.current) clearTimeout(nextAnimate.current) }
  }, [animate])

  const density = easeInOutQuad(tFactor, 0, 0.7)

  return (
    <div
      className="w-[100vw] h-[100vh] absolute centering bg-black pointer-events-none transition-opacity duration-300 z-50"
      style={{ opacity: loading ? 1 : 0 }}
    >
      <GlitchyTextContainer
        colors={projectsEn.map((proj) => proj.color)}
        variant="h2"
        density={density}
        className="text-lg sm:text-3xl"
      >
        Chargement...
      </GlitchyTextContainer>
    </div>
  )
}

export default Loading
