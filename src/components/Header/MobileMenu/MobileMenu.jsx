/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { VscChromeClose } from 'react-icons/vsc';
// eslint-disable-next-line import/no-unresolved
import { FaUserAlt } from 'react-icons/fa';
// eslint-disable-next-line import/no-unresolved
import { BsBoxArrowInRight } from 'react-icons/bs';

import styles from './MobileMenu.module.scss';
import menuItems from '../../../Data/menuItems';
import categoryItems from '../../../Data/buttomMenuItems';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const menuStyles = classNames({
    [styles.MobileMenu]: true,
    [styles.MobileMenu_active]: isOpen,
  });
  const MenuCover = classNames({
    [styles.MenuCover]: true,
    [styles.MenuCover_active]: isOpen,
  });

  return (
    <>
      <div className={MenuCover} onClick={toggleMenu} />
      <div className={menuStyles}>
        <div className={styles.CloseBtn} onClick={toggleMenu}>
          <VscChromeClose />
        </div>
        <div className={styles.menuHeader}>
          <Link to="/" className={styles.logo}>
            <img src="./img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.header}>
          <div className={styles.loginWrapper}>
            <FaUserAlt className={styles.loginIcon} />
            <p className={styles.loginText}>Войти</p>
            <p className={styles.loginText}>Зарегистрироваться</p>
          </div>
          <LanguageSelector />
        </div>
        <div className={styles.menuWrapper}>
          {menuItems.map((menuItem) => (
            <NavLink
              exact
              to={menuItem.pageURL}
              className={styles.link}
              activeClassName="selected"
              key={menuItem.id}
            >
              <BsBoxArrowInRight className={styles.linkIcon} />
              {menuItem.menuTitle}
            </NavLink>
          ))}
          {categoryItems.map((menuItem) => (
            <NavLink
              exact
              to={menuItem.path}
              className={styles.link}
              activeClassName="selected"
              key={menuItem.id}
            >
              <BsBoxArrowInRight className={styles.linkIcon} />
              {menuItem.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
