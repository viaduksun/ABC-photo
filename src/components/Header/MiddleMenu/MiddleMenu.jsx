import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkIconsBlock from './LinkIconsBlock';
import SearchForm from '../SearchForm/SearchForm';
import styles from './MiddleMenu.module.scss';
import PhoneDropdown from '../PhoneDropdown/PhoneDropdown';

const MiddleMenu = () => (
  <div className={styles.mainHeader}>
    <div className="container">
      <div className={styles.HeaderWrapper}>
        <NavLink exact to="/" className={styles.Logo}>
          <img src="./img/logo.png" alt="logo" />
        </NavLink>
        <SearchForm />
        <PhoneDropdown />
        <LinkIconsBlock />
      </div>
    </div>
  </div>
);

export default MiddleMenu;
