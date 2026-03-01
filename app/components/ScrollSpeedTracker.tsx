'use client'

import { useEffect, useRef } from 'react'

function ScrollSpeedTracker({ onChange }: { onChange: (speed: number) => void }) {
  const lastScrollTop = useRef(0)
  const lastTimestamp = useRef(0)
  const rafId = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) return

      rafId.current = requestAnimationFrame(() => {
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop
        const currentTimestamp = Date.now()
        const deltaScroll = currentScrollTop - lastScrollTop.current
        const deltaTime = currentTimestamp - lastTimestamp.current

        if (deltaTime > 0) {
          const speed = Math.abs(deltaScroll / deltaTime) * 1000
          onChange(speed)
        }

        lastScrollTop.current = currentScrollTop
        lastTimestamp.current = currentTimestamp
        rafId.current = 0
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [onChange])

  return null
}

export default ScrollSpeedTracker
