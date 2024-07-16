import React from 'react';

import { Box, Typography } from '@mui/material';

import Loading from '../Loading/Loading';

import HomeLogic from './HomeLogic';
import './Home.css';

function TitleSection() {
  return (
    <Box>
      <Typography variant='h2'>Tiedra</Typography>
      <Typography variant='h2'>Mateo</Typography>
    </Box>
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
