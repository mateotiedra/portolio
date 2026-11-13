'use client'

import { useEffect, useRef, useState } from 'react'
import { projectsEn } from './projects'
import GlitchyTextContainer from './GlitchyTextContainer'
import type { Locale } from './locale'

const easeInOutQuad = (t: number, min: number, max: number) => {
  const range = max - min
  const easedValue = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  return min + easedValue * range
}

function Loading({ loading, locale }: { loading: boolean, locale: Locale }) {
  const [tFactor, setTFactor] = useState(0)
  const tFactorRef = useRef(0)

  useEffect(() => {
    if (!loading) return

    let active = true
    let direction = 1
    let timer = 0

    const animate = () => {
      if (!active) return

      let nextT = tFactorRef.current + direction * 0.1
      if (nextT <= 0) {
        direction = 1
        nextT = 0
      } else if (nextT >= 1) {
        direction = -1
        nextT = 1
      }

      tFactorRef.current = nextT
      setTFactor(nextT)
      timer = window.setTimeout(animate, 60 + 60 * (1 - nextT))
    }

    animate()
    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [loading])

  const density = easeInOutQuad(tFactor, 0, 0.7)

  return (
    <div
      className={`w-full h-[100dvh] fixed inset-0 centering bg-black transition-opacity duration-300 z-50 ${loading ? '' : 'pointer-events-none'}`}
      data-loading={loading}
      style={{ opacity: loading ? 1 : 0 }}
    >
      <GlitchyTextContainer
        colors={projectsEn.map((proj) => proj.color)}
        variant="h2"
        density={density}
        className="text-lg sm:text-3xl"
      >
        {locale === 'fr' ? 'Chargement...' : 'Loading...'}
      </GlitchyTextContainer>
    </div>
  )
}

export default Loading
