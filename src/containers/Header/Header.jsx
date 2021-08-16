/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TopMenu from '../../components/Header/TopMenu/TopMenu';
import MiddleMenu from '../../components/Header/MiddleMenu/MiddleMenu';
import BottomMenu from '../../components/Header/BottomMenu/BottomMenu';
import MobileMenu from '../../components/Header/MobileMenu/MobileMenu';

import styles from './Header.module.scss';

const MenuAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(true);
    document.body.classList.add('no-scroll-burger');
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll-burger');
  };
  return (
    <div className={styles.Header}>
      <TopMenu />
      <MiddleMenu />
      <BottomMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
};
export default withRouter(MenuAppBar);
