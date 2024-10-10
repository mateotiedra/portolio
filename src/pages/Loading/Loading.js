import React, { useCallback, useEffect, useRef, useState } from 'react';

import { projects } from '../projects.tsx';

import GlitchyTextContainer from '../../components/GlitchyTextContainer';

// Easing function for ease-in-out
const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

// The loading page
function Loading({ notFullPage }) {
  const [density, setDensity] = useState(0); // The value that will vary between 0 and 0.9
  const duration = 3000; // Total duration of one animation cycle (in ms)

  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(1);
  const nextAnimate = useRef(null);

  const animate = useCallback(
    (timestamp) => {
      if (start === 0) setStart(timestamp);
      const elapsed = timestamp - start;

      // Calculate normalized time (0 to 1)
      const t = Math.min(elapsed / duration, 1);

      // Apply easing function
      const easedValue = easeInOutQuad(t);

      // Update state between 0 and 0.9
      setDensity(0 + 0.5 * easedValue * direction);

      // If the animation is complete (t >= 1), reset or change direction
      if (t >= 1) {
        setDirection((dir) => (dir *= -1)); // Reverse direction (from 0.9 to 0)
        setStart(0); // Reset the animation cycle
      }

      nextAnimate.current = setTimeout(() => {
        animate(Date.now());
      }, 100);
    },
    [direction, duration, start]
  );

  useEffect(() => {
    animate(Date.now());

    // Cleanup animation on component unmount
    return () => nextAnimate && clearTimeout(nextAnimate);
  }, [animate]);

  return (
    <div className='w-[100vw] h-[100vh] absolute centering'>
      <GlitchyTextContainer
        colors={projects.map((proj) => proj.color)}
        variant='h2'
        density={density}
      >
        Chargement
      </GlitchyTextContainer>
    </div>
  );
}

export default Loading;
