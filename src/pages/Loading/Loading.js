import React, { useCallback, useEffect, useRef, useState } from 'react';

import { projectsEn } from '../projects.tsx';

import GlitchyTextContainer from '../../components/GlitchyTextContainer';

// Easing function for ease-in-out
const easeInOutQuad = (t, min, max) => {
  const range = max - min; // The difference between max and min
  const easedValue = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // The original easing function

  // Scale the eased value to the [min, max] range
  return min + easedValue * range;
};

// The loading page
function Loading({ loading }) {
  const [tFactor, setTFactor] = useState(0); // The value that will vary between 0 and 0.9

  const nextAnimate = useRef(null);

  const animate = useCallback((prevDirection) => {
    setTFactor((prevTFactor) => {
      let nextDirection = prevDirection;
      let nextT = prevTFactor + nextDirection * 0.1;

      if (nextT <= 0) {
        nextDirection = 1;
        nextT = 0;
      } else if (nextT >= 1) {
        nextDirection = -1;
        nextT = 1;
      }

      // Recursively schedule the next animation
      nextAnimate.current && clearTimeout(nextAnimate.current);
      nextAnimate.current = setTimeout(() => {
        animate(nextDirection); // Continue animating with the new direction
      }, 60 + 60 * (1 - nextT));

      return nextT; // Return the new tFactor to update state
    });
  }, []);

  useEffect(() => {
    animate(1);

    // Cleanup animation on component unmount
    return () => nextAnimate.current && clearTimeout(nextAnimate.current);
  }, [animate]);

  const density = easeInOutQuad(tFactor, 0, 0.7);

  return (
    <div
      className='w-[100vw] h-[100vh] absolute centering bg-black pointer-events-none transition-opacity duration-300 z-50'
      style={{ opacity: loading ? 1 : 0 }}
    >
      <GlitchyTextContainer
        colors={projectsEn.map((proj) => proj.color)}
        variant='h2'
        density={density}
        className='text-lg sm:text-3xl'
      >
        Chargement...
      </GlitchyTextContainer>
    </div>
  );
}

export default Loading;
