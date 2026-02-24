'use client'
import { useEffect, useState } from 'react';
import { getRandomNumbers } from './helpers';

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
    let text = '';
    let childClassName = '';

    if (typeof children === 'string') {
      text = children;
    } else if (children && typeof children === 'object' && 'props' in children) {
      const el = children as React.ReactElement<any>;
      text = typeof el.props.children === 'string' ? el.props.children : '';
      childClassName = el.props.className || '';
    }

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
              'absolute translate-x-[-50%] translate-y-[-55%] left-1/2 top-1/2 lowercase transition-colors flex justify-center items-center ' +
              childClassName
            }
            style={{
              fontFamily: "'Pacifico', serif",
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
