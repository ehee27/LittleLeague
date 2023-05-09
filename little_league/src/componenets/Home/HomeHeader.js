import React from 'react';
import './home.css';
import { Typography, Grid } from '@mui/material';

const HomeHeader = ({ title, logo }) => {
  return (
    <section className="Banner">
      <Typography variant="h4">{title}</Typography>

      <Grid className="LogoBox">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </Grid>
      <Typography gutterBottom>
        The Blue Valley Recreation youth baseball program is divided into 2
        leagues per grade level. The American League is for more advanced
        players, while the National league is for less competative players who
        just want to have fun.
      </Typography>
    </section>
  );
};

export default HomeHeader;
