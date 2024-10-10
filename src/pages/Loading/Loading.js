import React, { useEffect, useState } from 'react';

import { projects } from '../projects.tsx';

import GlitchyTextContainer from '../../components/GlitchyTextContainer';

// Easing function for ease-in-out
const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

// The loading page
function Loading({ notFullPage }) {
  const [seconds, setSeconds] = useState(3);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      if (seconds > 0) {
        setTimeout(() => {
          if (!isCancelled) setSeconds(seconds - 1);
        }, 1000);
      } else {
        setDisplayMessage(true);
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [setDisplayMessage, seconds]);

  const [density, setDensity] = useState(0); // The value that will vary between 0 and 0.9
  const duration = 3000; // Total duration of one animation cycle (in ms)

  useEffect(() => {
    let start;
    let direction = 1; // Used to alternate between increasing and decreasing

    var nextAnimate;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Calculate normalized time (0 to 1)
      const t = Math.min(elapsed / duration, 1);

      // Apply easing function
      const easedValue = easeInOutQuad(t);

      // Update state between 0 and 0.9
      setDensity(0 + 0.5 * easedValue * direction);

      // If the animation is complete (t >= 1), reset or change direction
      if (t >= 1) {
        direction *= -1; // Reverse direction (from 0.9 to 0)
        start = null; // Reset the animation cycle
      }

      nextAnimate = setTimeout(() => {
        animate(Date.now());
      }, 100);
    };

    animate(Date.now());

    // Cleanup animation on component unmount
    return () => nextAnimate && clearTimeout(nextAnimate);
  }, []);

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
