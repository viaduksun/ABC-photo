/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LinkIconsBlock from './LinkIconsBlock';
import SearchForm from '../SearchForm/SearchForm';
import styles from './MiddleMenu.module.scss';
import PhoneDropdown from '../PhoneDropdown/PhoneDropdown';
import LoginModal from '../../LoginModal/LoginModal';

const MiddleMenu = () => {
  const isLoginModalOpen = useSelector(
    (state) => state.modals.isLoginModalOpen
  );
  return (
    <>
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
      {isLoginModalOpen && <LoginModal />}
    </>
  );
};

export default MiddleMenu;
