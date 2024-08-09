import React from 'react';

import sharkImage from '../../assets/images/landing-shark-white.png'
import { RiArrowDownDoubleFill } from "react-icons/ri";

function TitleSection() {
  const titleTextClassName = 'absolute h-0 w-0 leading-[0px] flex justify-start text-[55vw] uppercase font-bold rotate-90 top-0 left-0'

  return (
    <div className='relative flex justify-between h-[100vh] w-[100vw]'>
      <div className='absolute flex justify-center w-[100%] pt-[24vw] z-50'>
        <img className='relative rotate-180 w-[90vw]' src={sharkImage} alt='White hammer shark' />
      </div>
      <div className='absolute flex justify-between h-[100vh] w-[100%] px-[10vw]'>
        <div className='relative top-[-3vw] left-[20vw]'>
          <h1 className={titleTextClassName + ' items-end'}>
            Mateo
          </h1>
          <div className='absolute translate-x-[-65%] top-[187vw]'>
            <RiArrowDownDoubleFill className='animate-bounce w-[13vw] h-[13vw]' />
          </div>
        </div>
        <div className='relative top-[76vw] right-[16vw]'>
          <h1 className={titleTextClassName}>
            Tiedra
          </h1>
        </div>
      </div>

    </div>
  );
}

/* function AboutMe() {
  return (
    <div>
      <p>About Me</p>
      <Typography variant='h2'>
        Developer trying to create nice things out of nothing
      </Typography>
      <Typography variant='body1'>
        Self-taught programmer for more than 10 years, now studying computer
        science at EPFL. <br />
        Always looking for new opportunities to create something new.
      </Typography>
    </div>
  );
} */

function Home() {
  return (
    <>
      <TitleSection />
      {/* <AboutMe /> */}
    </>
  );
}

export default Home;
