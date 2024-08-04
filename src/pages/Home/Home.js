import React from 'react';

import { Box, Typography } from '@mui/material';

import Loading from '../Loading/Loading';

import HomeLogic from './HomeLogic';

function TitleSection() {
  const titleTextStyles = {
    fontSize: '60vw',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    position: 'absolute',
    width: 0,
    height: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    transform: 'rotate(0.25turn)',
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        //overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', top: '-3vw' }}>
        <Typography
          variant='h1'
          sx={{
            ...titleTextStyles,
            alignItems: 'flex-end',
          }}
        >
          Mateo
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', top: '84vw' }}>
        <Typography
          variant='h1'
          sx={{
            ...titleTextStyles,
            alignItems: 'flex-start',
          }}
        >
          Tiedra
        </Typography>
      </Box>
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
