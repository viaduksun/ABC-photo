import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Box,
} from '@material-ui/core';
import userRegister from '../api/register';
import Login from '../api/login';
import setProduct from '../api/setProduct';

const Header = () => {
  const handleClick = () => {
    userRegister();
  };
  const handleLogin = () => {
    Login();
  };
  const handleCreateProduct = () => {
    setProduct();
  };
  return (
    <AppBar>
      <Container maxWidth="sm">
        <Toolbar>
          <Box mr={3}>
            <Typography variant="h5">ABC Photo</Typography>
          </Box>
          <Box mr={3}>
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Register
            </Button>
          </Box>
          <Box mr={3}>
            <Button
              mr={3}
              variant="contained"
              color="default"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Box mr={3}>
            <Button
              mr={3}
              variant="contained"
              color="default"
              onClick={handleCreateProduct}
            >
              Create product
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
