import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import TopMenu from '../components/Header/TopMenu';
import LoginIcon from '../components/Header/LoginIcon';
import CartIcon from '../components/Header/CartIcon';
import PhoneAccordion from '../components/Header/PhoneAccordion';
import SearchForm from '../components/Header/SearchForm';
import BottomMenu from '../components/Header/BottomMenu';
import styles from './Header.module.scss';

const greenColor = lightGreen[700];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
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
  header: {
    backgroundColor: theme.palette.background.paper,
    height: 165,
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
    alignItems: 'center',
    height: 80,
  },
  inputWrapper: {
    flexGrow: 1,
  },
}));

const MenuAppBar = () => {
  const classes = useStyles();

  return (
    <div className={styles.Header}>
      <TopMenu />
      <div className={styles.mainHeader}>
        <div className="container mainHeaderContainer">
          <div className={styles.HeaderWrapper}>
            <NavLink exact to="/" className={styles.Logo}>
              <img src="./img/logo.png" alt="logo" className={classes.logo} />
            </NavLink>

            <SearchForm />

            <PhoneAccordion />
            <LoginIcon />
            <CartIcon />
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};
export default withRouter(MenuAppBar);
