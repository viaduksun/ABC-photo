import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink, withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  },
}));

const MenuAppBar = (props) => {
  console.log(props);
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ABC Fotos
          </Typography>

          <div>
            {isMobile ? (
              <div>
                <span>is mobile</span>
              </div>
            ) : (
              <h1>Desktop</h1>
            )}
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
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
              <MenuItem onClick={() => handleMenuClick('/products')}>
                Products
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick('/contacts')}>
                Contacts
              </MenuItem>
            </Menu>

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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withRouter(MenuAppBar);
