'use client'
import { useEffect, useState } from 'react';
import { getRandomNumbers } from './helpers';

function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (!children) return '';
  if (Array.isArray(children)) return children.map(extractText).join('');
  if (typeof children === 'object' && 'props' in children) {
    return extractText((children as React.ReactElement<any>).props.children);
  }
  return '';
}

function extractClassName(children: React.ReactNode): string {
  if (children && typeof children === 'object' && 'props' in children) {
    return (children as React.ReactElement<any>).props.className || '';
  }
  return '';
}

function GlitchyTextContainer({
  children,
  variant = '',
  density = 0.4,
  color,
  colors,
  className: extraClassName,
  ...props
}: {
  children: React.ReactNode,
  variant?: string,
  density?: number,
  color?: string,
  colors?: string[],
  className?: string,
  [key: string]: any,
}) {
  const [letters, setLetters] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const text = extractText(children);
    const childClassName = extractClassName(children);

    if (!text) return;

    const chars = text.split('');
    const idToChange = getRandomNumbers(
      Math.round(density * chars.length),
      chars.length - 1
    );

    setLetters(
      chars.map((char, id) => (
        <span key={id} className='relative'>
          <span
            className={' ' + childClassName}
            style={{ opacity: idToChange.includes(id) ? 0 : 1 }}
          >
            {char}
          </span>
          <span
            className={
              'absolute translate-x-[-50%] translate-y-[-55%] left-1/2 top-1/2 font-pacifico lowercase transition-colors flex justify-center items-center ' +
              childClassName
            }
            style={{
              opacity: idToChange.includes(id) ? 1 : 0,
              color: idToChange.includes(id)
                ? color ||
                  (colors && colors[Math.floor(Math.random() * colors.length)]) ||
                  'white'
                : 'white',
            }}
          >
            {char}
          </span>
        </span>
      ))
    );
  }, [children, density, color, colors]);

  const Tag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : variant === 'h4' ? 'h4' : 'p';

  return <Tag className={extraClassName} {...props}>{letters}</Tag>;
}

export default GlitchyTextContainer;
