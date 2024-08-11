import React, { useCallback, useEffect, useRef, useState } from 'react';

import sharkImage from '../../assets/images/landing-shark-white.png'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import NoisyContainer from '../../components/NoisyContainer/NoisyContainer';


function TitleSection() {
  const downIndicatorRef = useRef(null);
  const titleTextClassName = 'absolute h-0 w-0 leading-[0px] flex justify-start text-[55vw] uppercase font-bold rotate-90 top-0 left-0'

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
  //console.log(indicatorOpacity);

  return (
    <div className='overflow-hidden'>
      <div className='relative flex justify-between w-[100vw] h-[265vw] '>
        <div className='absolute flex justify-center w-[100%] pt-[24vw] z-50'>
          <img className='relative rotate-180 w-[90vw]' src={sharkImage} alt='White hammer shark' />
        </div>
        <div className='absolute flex justify-between h-[100vh] w-[100%] px-[10vw] overflow'>
          <div className='relative top-[-3vw] left-[20vw]'>
            <h1 className={titleTextClassName + ' items-end'}>
              Mateo
            </h1>

          </div>
          <div className='relative top-[76vw] right-[16vw]'>
            <h1 className={titleTextClassName}>
              Tiedra
            </h1>
          </div>
        </div>
      </div>
      <div ref={downIndicatorRef} className='absolute left-[21vw] top-[180vw] h-[84vw] flex flex-col justify-end'>
        <div className='sticky bottom-[2vh]' style={{ opacity: indicatorOpacity }}>
          <RiArrowDownDoubleFill className={'w-[13vw] h-[13vw] text-white'} style={{ animation: stickyJump ? ' bounce 1.5s infinite' : '' }} />
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className='p-section-container'>
      <h4>About me</h4>
      <h2>
        Developer, at least at the beginning
      </h2>
      <p>I love to imagine and create things. I love to think about ideas and share them. I love to develop solutions and fight to make them work.</p>
      <p>That’s why I’ve been a self-taught developer for more than 10 years, and why I am currently studying computer science at EPFL. For me programming has always been the greatest tool to be able to bring ideas to life.</p>
    </div>
  );
}

function Home() {
  return (
    <NoisyContainer>
      <TitleSection />
      <AboutMe />
    </NoisyContainer>
  );
}

export default Home;
