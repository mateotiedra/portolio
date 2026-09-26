'use client'

import React, { useEffect, useMemo, useRef } from 'react'
import { getRandomNumbers } from './helpers'

type GlitchyTextContainerProps = {
  children: any
  variant?: string
  density?: number
  color?: string
  colors?: string[]
  className?: string
  [key: string]: any
}

function GlitchyTextContainer({
  children,
  variant = '',
  density = 0.4,
  color,
  colors = undefined,
  ...props
}: GlitchyTextContainerProps) {
  const text = typeof children === 'string'
    ? children
    : children?.props?.children || ''
  const extractedText = String(text)
  const childClassName = children?.props?.className || ''
  const chars = useMemo(() => extractedText.split(''), [extractedText])
  const colorsKey = colors?.join(',') ?? ''
  const paletteRef = useRef(colors)
  const baseSpans = useRef<Array<HTMLSpanElement | null>>([])
  const overlaySpans = useRef<Array<HTMLSpanElement | null>>([])
  paletteRef.current = colors

  const letters = useMemo(() => chars.map((char, id) => (
    <span key={id} className="relative">
      <span
        ref={(element) => { baseSpans.current[id] = element }}
        className={' ' + childClassName}
        style={{ opacity: 1 }}
      >
        {char}
      </span>
      <span
        ref={(element) => { overlaySpans.current[id] = element }}
        className={
          'absolute translate-x-[-50%] translate-y-[-55%] left-1/2 top-1/2 font-pacifico lowercase transition-colors text-gray-400 flex justify-center items-center '
          + childClassName
        }
        style={{ opacity: 0, color: 'white' }}
      >
        {char}
      </span>
    </span>
  )), [chars, childClassName])

  useEffect(() => {
    if (chars.length === 0) return

    const idsToChange = new Set(getRandomNumbers(
      Math.round(density * chars.length),
      chars.length - 1
    ))
    const palette = paletteRef.current

    chars.forEach((_, id) => {
      const selected = idsToChange.has(id)
      const baseSpan = baseSpans.current[id]
      const overlaySpan = overlaySpans.current[id]
      if (baseSpan) baseSpan.style.opacity = selected ? '0' : '1'
      if (!overlaySpan) return

      overlaySpan.style.opacity = selected ? '1' : '0'
      overlaySpan.style.color = selected
        ? color || (palette && palette[Math.floor(Math.random() * palette.length)]) || ''
        : 'white'
    })
  }, [extractedText, childClassName, chars, density, color, colorsKey])

  const Tag = (() => {
    const v = variant.length > 0 ? variant : children?.type
    switch (v) {
      case 'h1': return 'h1'
      case 'h2': return 'h2'
      case 'h3': return 'h3'
      case 'h4': return 'h4'
      case 'h5': return 'h5'
      case 'h6': return 'h6'
      default: return 'p'
    }
  })() as keyof React.JSX.IntrinsicElements

  return <Tag {...props}>{letters}</Tag>
}

export default React.memo(GlitchyTextContainer)
