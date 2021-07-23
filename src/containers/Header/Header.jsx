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
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll');
  };
  return (
    <div className={styles.Header}>
      <TopMenu />
      <MiddleMenu />
      <BottomMenu toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};
export default withRouter(MenuAppBar);
