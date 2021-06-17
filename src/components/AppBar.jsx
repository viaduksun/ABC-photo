import React from 'react';
import { AppBar, Container, Toolbar, Button } from '@material-ui/core';
import userRegister from '../api/register';

const NavBar = () => {
  const handleClick = () => {
    console.log('Register click');
    userRegister();
  };
  return (
    <AppBar>
      <Container maxWidth="sm">
        <Toolbar>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Register
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
