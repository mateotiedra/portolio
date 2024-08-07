import React from 'react';

import { Box, Typography } from '@mui/material';

import Loading from '../Loading/Loading';

import HomeLogic from './HomeLogic';

function TitleSection() {
  const titleTextClassName = 'absolute h-0 w-0 leading-[0px] flex justify-start text-[60vw] uppercase font-bold rotate-90 top-0 left-0'

  return (
    <div
      className='flex justify-between h-[100vh] w-[100vw]'>
      <div className='relative top-[-3vw] left-[22vw]'>
        <h1 className={titleTextClassName + ' items-end'}>
          Mateo
        </h1>
      </div>
      <div className='relative top-[84vw] right-[18vw]'>
        <h1 className={titleTextClassName} >
          Tiedra
        </h1>
      </div>
    </div >
  );
}

function AboutMe() {
  return (
    <Box>
      <Typography variant='h3'>About Me</Typography>
      <Typography variant='h2'>
        Developer trying to create nice things out of nothing
      </Typography>
      <Typography variant='body1'>
        Self-taught programmer for more than 10 years, now studying computer
        science at EPFL. <br />
        Always looking for new opportunities to create something new.
      </Typography>
    </Box>
  );
}

function Home() {
  const { pageStatus } = HomeLogic();

  if (pageStatus === 'loading') return <Loading />;

  return (
    <>
      <TitleSection />
      <AboutMe />
    </>
  );
}

export default Home;
