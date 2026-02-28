import { useEffect, useState } from 'react';
import { getRandomNumbers } from '../../helpers';

function GlitchyTextContainer({
  children,
  variant = '',
  density = 0.4,
  color,
  colors = undefined,
  ...props
}) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const chars = children?.props?.children.split('') || children.split('');

    const idToChange = getRandomNumbers(
      Math.round(density * chars.length),
      chars.length - 1
    );
    // Map through the characters and wrap the target index in a styled span
    setLetters(
      chars.map((char, id) => {
        if (children?.props?.className) console.log(children?.props?.className);
        return (
          <span key={id} className='relative'>
            <span
              className={' ' + children?.props?.className}
              style={{ opacity: idToChange.includes(id) ? 0 : 1 }}
            >
              {char}
            </span>
            <span
              className={
                'absolute translate-x-[-50%] translate-y-[-55%] left-1/2 top-1/2 font-pacifico lowercase transition-colors text-gray-400 flex justify-center items-center ' +
                children?.props?.className
              }
              style={{
                opacity: idToChange.includes(id) ? 1 : 0,
                color: idToChange.includes(id)
                  ? color ||
                    (colors &&
                      colors[Math.floor(Math.random() * colors.length)])
                  : 'white',
              }}
            >
              {char}
            </span>
          </span>
        );
      })
    );
  }, [children, density, color, colors]);

  switch (variant.length > 0 ? variant : children.type) {
    case 'h1':
      return <h1 {...props}>{letters}</h1>;
    case 'h2':
      return <h2 {...props}>{letters}</h2>;
    case 'h3':
      return <h3 {...props}>{letters}</h3>;
    case 'h4':
      return <h4 {...props}>{letters}</h4>;
    case 'h5':
      return <h5 {...props}>{letters}</h5>;
    case 'h6':
      return <h6 {...props}>{letters}</h6>;
    default:
      return <p {...props}>{letters}</p>;
  }
}

export default GlitchyTextContainer;
