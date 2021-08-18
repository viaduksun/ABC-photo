/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import { React, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { VscChromeClose } from 'react-icons/vsc';
// eslint-disable-next-line import/no-unresolved
import { FaUserAlt } from 'react-icons/fa';
// eslint-disable-next-line import/no-unresolved
import { BsBoxArrowInRight } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import styles from './MobileMenu.module.scss';
import menuItems from '../../../Data/menuItems';
import categoryItems from '../../../Data/buttomMenuItems';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {
  setCurrentCategoryAction,
  setCurrentQueryAction,
} from '../../../store/products/actions';
import { loginModalOpenAction } from '../../../store/madals/actions';

const MobileMenu = ({ isOpen, closeMenu }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  const menuStyles = classNames({
    [styles.MobileMenu]: true,
    [styles.MobileMenu_active]: isOpen,
  });
  const currentUser = useSelector((state) => state.admin.currentUser);
  const MenuCover = classNames({
    [styles.MenuCover]: true,
    [styles.MenuCover_active]: isOpen,
  });

  const handleClick = (id) => {
    console.log(id);
    dispatch(setCurrentCategoryAction(id));
    dispatch(setCurrentQueryAction(id));
    closeMenu();
  };
  const handleLogin = () => {
    dispatch(loginModalOpenAction());
    closeMenu();
  };
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <>
      <div className={MenuCover} onClick={closeMenu} />
      <div className={menuStyles}>
        <div className={styles.CloseBtn} onClick={closeMenu}>
          <VscChromeClose />
        </div>
        <div className={styles.menuHeader} onClick={closeMenu}>
          <Link to="/" className={styles.logo}>
            <img src="./img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.header}>
          <div className={styles.loginWrapper}>
            {isLoggedIn && !isAdmin && (
            <Link to="/profile" onClick={closeMenu}>
              <FaUserAlt className={styles.loginIcon} />
            </Link>
            )}
            {isLoggedIn && isAdmin && (
            <Link to="/profile" onClick={closeMenu}>
              <FaUserAlt className={styles.loginIcon} />
            </Link>
            )}
            <p onClick={handleLogin} className={styles.loginText}>
              Войти/Зарегистрироваться
            </p>
          </div>
          {/* <LanguageSelector /> */}
        </div>
        <div className={styles.menuWrapper}>
          {menuItems.map((menuItem) => (
            <NavLink
              exact
              to={menuItem.pageURL}
              className={styles.link}
              activeClassName="selected"
              key={menuItem.id}
              onClick={closeMenu}
            >
              <BsBoxArrowInRight className={styles.linkIcon} />
              {menuItem.menuTitle}
            </NavLink>
          ))}
          {categoryItems.map((menuItem) => (
            <NavLink
              className={styles.link}
              exact
              to={menuItem.path}
              activeClassName="selected"
              key={menuItem.id}
              onClick={() => handleClick(menuItem.category)}
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
