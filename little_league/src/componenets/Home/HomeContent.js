import React, { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';
import RegistrationForm from '../Registration/RegistrationForm';
import { Button, Grid } from '@mui/material';

const HomeContent = () => {
  const [userData, setUserData] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUserData(res.data);
    });
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className="Content">
      <div className="UserData">
        {userData ? (
          <Button variant="outlined" onClick={handleClick}>
            View Data
          </Button>
        ) : (
          <span>''</span>
        )}
        {clicked ? (
          <Grid className="Data">
            {userData.map(item => {
              return <div key={item.id}>{item.email}</div>;
            })}
          </Grid>
        ) : (
          <span></span>
        )}
      </div>

      <RegistrationForm />
    </section>
  );
};

export default HomeContent;
