import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginIcon from './LoginIcon';
import CartIcon from './CartIcon';
import SearchForm from '../SearchForm/SearchForm';
import styles from './MiddleMenu.module.scss';
import PhoneDropdown from '../PhoneDropdown/PhoneDropdown';

const MiddleMenu = () => (
  <div className={styles.mainHeader}>
    <div className="container mainHeaderContainer">
      <div className={styles.HeaderWrapper}>
        <NavLink exact to="/" className={styles.Logo}>
          <img src="./img/logo.png" alt="logo" />
        </NavLink>
        <SearchForm />
        <PhoneDropdown />
        <LoginIcon />
        <CartIcon />
      </div>
    </div>
  </div>
);

export default MiddleMenu;
