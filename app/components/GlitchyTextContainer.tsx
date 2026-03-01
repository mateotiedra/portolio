'use client'

import React, { useEffect, useMemo, useState } from 'react'
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
  const [letters, setLetters] = useState<React.ReactNode[]>([])
  const colorsKey = useMemo(() => colors?.join(',') ?? '', [colors])

  useEffect(() => {
    const text = typeof children === 'string' 
      ? children 
      : children?.props?.children || ''
    const chars = String(text).split('')
    const childClassName = children?.props?.className || ''

    const idToChange = getRandomNumbers(
      Math.round(density * chars.length),
      chars.length - 1
    )

    setLetters(
      chars.map((char: string, id: number) => (
        <span key={id} className="relative">
          <span
            className={' ' + childClassName}
            style={{ opacity: idToChange.includes(id) ? 0 : 1 }}
          >
            {char}
          </span>
          <span
            className={
              'absolute translate-x-[-50%] translate-y-[-55%] left-1/2 top-1/2 font-pacifico lowercase transition-colors text-gray-400 flex justify-center items-center ' +
              childClassName
            }
            style={{
              opacity: idToChange.includes(id) ? 1 : 0,
              color: idToChange.includes(id)
                ? color ||
                  (colors && colors[Math.floor(Math.random() * colors.length)])
                : 'white',
            }}
          >
            {char}
          </span>
        </span>
      ))
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, density, color, colorsKey])

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
