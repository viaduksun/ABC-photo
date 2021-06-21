import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Container, Box } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import lightGreen from '@material-ui/core/colors/lightGreen';

const greenColor = lightGreen[700];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: null,
    marginRight: theme.spacing(4),
    color: theme.palette.grey[600],
  },
  topMenu: {
    backgroundColor: theme.palette.grey[200],
    height: 35,
  },
  midleMenu: {
    backgroundColor: theme.palette.background.paper,
    height: 80,
  },
  bottomMenu: {
    backgroundColor: greenColor,
    height: 50,
  },
  logo: {
    height: 40,
  },
  menuContainer: {
    display: 'flex',
  },
}));

const MenuAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.topMenu}>
        <Container>Top menu</Container>
      </Box>
      <AppBar position="static" className={classes.midleMenu}>
        <Toolbar>
          <Container className={classes.menuContainer}>
            <Typography variant="h6" className={classes.title}>
              <img src="./img/logo.png" alt="logo" className={classes.logo} />
            </Typography>

            {isMobile ? (
              <div>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <NavLink
                  exact
                  to="/"
                  className={classes.link}
                  activeClassName="selected"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  to="/products"
                  className={classes.link}
                  activeClassName="selected"
                >
                  Products
                </NavLink>
                <NavLink
                  exact
                  to="/contacts"
                  className={classes.link}
                  activeClassName="selected"
                >
                  Contacts
                </NavLink>
              </div>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <Box className={classes.bottomMenu}>
        <Container>Bottom menu</Container>
      </Box>
    </div>
  );
};
export default withRouter(MenuAppBar);
