import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Filter from '../filter/Filter';
import Data from '../data/Data';

const Main = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters />
        </Container>
      </AppBar>
      <main>
        <Box sx={{marginTop: 2, padding: 2}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Filter />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Data />
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};
export default Main;
