import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './main.css'
import BoxImages from './BoxImages';
import InfoMain from './InfoMain';

export default function BoxMain() {
  return (
    <div className='main'>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#ffff', height: '100vh', width: '100%', padding: '2rem' }}>
            <BoxImages></BoxImages>
        </Box>
      </Container>
    </React.Fragment>

    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#ffff', height: '100vh', width: '90%' }}>
            <InfoMain/>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  )
}
