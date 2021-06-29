/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdViewHeadline, MdShoppingCart } from 'react-icons/md';

import MenuItems from '../../../Data/buttomMenuItems';
import SearchForm from '../SearchForm/SearchForm';
import BottomMenuLink from './BottomMenuLink';
import styles from './BottomMenu.module.scss';

const BottomMenu = ({ toggleMenu }) => (
  <div className={styles.BottomMenu}>
    <div className="container">
      <div className={styles.BottomMenuWrapp}>
        <ul className={styles.BottomUl}>
          {MenuItems.map((item) => (
            <BottomMenuLink
              id={item.id}
              path={item.path}
              title={item.title}
              key={item.id}
            />
          ))}
        </ul>
        <div className={styles.mobiileMenuWrapper}>
          <div className={styles.cartIcon}>
            <MdShoppingCart />
          </div>
          <SearchForm />
          <div className={styles.BurgerIcon}>
            <MdViewHeadline onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BottomMenu;
