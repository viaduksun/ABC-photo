import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Box,
<<<<<<< HEAD
=======
  IconButton,
>>>>>>> develop
} from '@material-ui/core';
import userRegister from '../api/register';
import Login from '../api/login';
import setProduct from '../api/setProduct';
<<<<<<< HEAD

const Header = () => {
=======
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  munuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

>>>>>>> develop
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
<<<<<<< HEAD
    <AppBar>
      <Container maxWidth="sm">
        <Toolbar>
          <Box mr={3}>
            <Typography variant="h5">ABC Photo</Typography>
          </Box>
          <Box mr={3}>
            <Button variant="contained" color="secondary" onClick={handleClick}>
=======
    <AppBar position="fixed">
      <Container fixed height={200}>
        <Box height={100} width={300}></Box>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            ABC Photo
          </Typography>
          <Box mr={3}>
            <Button variant="contained" color="inherit" onClick={handleClick}>
>>>>>>> develop
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
<<<<<<< HEAD
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
=======
          <Button
            mr={3}
            variant="contained"
            color="default"
            onClick={handleCreateProduct}
          >
            Create product
          </Button>
>>>>>>> develop
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
