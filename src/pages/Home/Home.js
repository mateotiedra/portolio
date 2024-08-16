import React, { useCallback, useEffect, useRef, useState } from 'react';

import whiteSharkImage from '../../assets/images/landing-shark-white.png'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import NoisyContainer from '../../components/NoisyContainer/NoisyContainer';
import GlitchyTextContainer from '../../components/GlitchyTextContainer';
import ScrollSpeedTracker from '../../components/GlitchyTextContainer/ScrollSpeedTracker';


function TitleSection({ glitchyTextDensity }) {
  const downIndicatorRef = useRef(null);

  // Sticky indicator
  const [indicatorOpacity, setIndicatorOpacity] = useState(1)
  const [stickyJump, setStickyJump] = useState(true)
  const onScroll = useCallback(() => {
    if (!downIndicatorRef.current) return;

    const containerElemRect = downIndicatorRef.current.getBoundingClientRect()
    const stickyElemRect = downIndicatorRef.current.children[0].getBoundingClientRect()

    setStickyJump(false);
    setIndicatorOpacity(1 - (stickyElemRect.top - containerElemRect.top) / (containerElemRect.height - stickyElemRect.height));
  }, [setStickyJump, setIndicatorOpacity, downIndicatorRef])

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [onScroll])

  const titleTextRotatedClassName = 'absolute h-0 w-0 leading-[0px] flex justify-start text-[55vw] uppercase font-bold rotate-90 top-0 left-0'
  const titleTextFlatClassName = 'uppercase font-bold text-[14vw] max-text-[30px]'

  return (
    <>
      <div className='overflow-hidden sm:hidden'>
        <div className='relative flex justify-between w-[100vw] h-[270vw] '>
          <div className='absolute flex justify-center w-[100%] pt-[24vw] z-50'>
            <img className='relative rotate-180 w-[90vw]' src={whiteSharkImage} alt='White hammer shark' />
          </div>
          <div className='absolute flex justify-between h-[100vh] w-[100%] px-[10vw] overflow'>
            <div className='relative top-[-3vw] left-[20vw]'>
              <GlitchyTextContainer variant='h1' density={glitchyTextDensity + 0.04} className={titleTextRotatedClassName}>
                Mateo
              </GlitchyTextContainer>
            </div>
            <div className='relative top-[80vw] right-[16vw]'>
              <GlitchyTextContainer variant='h1' density={glitchyTextDensity + 0.04} className={titleTextRotatedClassName}>
                Tiedra
              </GlitchyTextContainer>
            </div>
          </div>
        </div>
        <div ref={downIndicatorRef} className='absolute left-[21vw] top-[180vw] h-[84vw] flex flex-col justify-end'>
          <div className='sticky bottom-[2vh]' style={{ opacity: indicatorOpacity }}>
            <RiArrowDownDoubleFill className={'w-[13vw] h-[13vw] text-white'} style={{ animation: stickyJump ? ' bounce 1.5s infinite' : '' }} />
          </div>
        </div>
      </div>
      <div className='hidden sm:flex flex-col justify-center items-center h-[80vh] mb-[10vh] mx-auto] max-w-[1375px] mx-auto'>
        <div className='absolute flex justify-center w-[23%] left-[45%] -translate-x-1/2 z-50'>
          <img className='relative hori -rotate-90' src={whiteSharkImage} alt='White hammer shark' />
        </div>
        <div className='relative'>
          <GlitchyTextContainer variant='h1' density={glitchyTextDensity + 0.04} className={titleTextFlatClassName}>
            Mateo
          </GlitchyTextContainer>
        </div>
        <div className='relative'>
          <GlitchyTextContainer variant='h1' density={glitchyTextDensity + 0.04} className={titleTextFlatClassName}>
            Tiedra
          </GlitchyTextContainer>
        </div>
      </div>

    </>
  );
}

function AboutMe({ glitchyTextDensity }) {
  return (
    <div className='section-container'>
      <GlitchyTextContainer density={glitchyTextDensity}>
        <h4>About me</h4>
      </GlitchyTextContainer>
      <GlitchyTextContainer variant='h2' density={glitchyTextDensity / 1.2 + 0.1}>
        Developer, at least at the beginning
      </GlitchyTextContainer>
      <GlitchyTextContainer density={glitchyTextDensity}>
        I love to imagine and create things. I love to think about ideas and share them. I love to develop solutions and fight to make them work.
      </GlitchyTextContainer>
      <GlitchyTextContainer density={glitchyTextDensity}>
        That’s why I’ve been a self-taught developer for more than 10 years, and why I am currently studying computer science at EPFL. For me programming has always been the greatest tool to be able to bring ideas to life.
      </GlitchyTextContainer>
    </div>

  );
}

function SelectedProject({ glitchyTextDensity }) {
  return (
    <div className='section-container'>
      <GlitchyTextContainer variant='h4' density={glitchyTextDensity}>
        Selected
      </GlitchyTextContainer>
      <GlitchyTextContainer variant='h2' density={glitchyTextDensity / 1.2 + 0.1}>
        Project
      </GlitchyTextContainer>
    </div>

  );
}

function Home() {
  // Glitchy text density
  const canUpdateDensity = useRef(true)
  const [glitchyTextDensity, setGlitchyTextDensity] = useState(0)
  const updateGlitchyTextDensity = useCallback((scrollSpeed) => {
    if (canUpdateDensity.current && scrollSpeed > 100) {
      setGlitchyTextDensity(Math.max(Math.min((scrollSpeed) / 10000, 1), 0));

      canUpdateDensity.current = false;
      setTimeout(() => {
        canUpdateDensity.current = true;
        setGlitchyTextDensity(0);
      }, 300)
    }
  }, [setGlitchyTextDensity, canUpdateDensity])
  return (
    <NoisyContainer>
      <ScrollSpeedTracker onChange={updateGlitchyTextDensity} />
      <TitleSection glitchyTextDensity={glitchyTextDensity} />
      <SelectedProject glitchyTextDensity={glitchyTextDensity} />
    </NoisyContainer >
  );
}

export default Home;
