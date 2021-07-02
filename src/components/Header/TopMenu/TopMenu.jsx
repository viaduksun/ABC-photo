import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import menuItems from '../../../Data/menuItems';
import styles from './TopMenu.module.scss';

const TopMenu = () => (
  <div className={styles.topContainer}>
    <div className="container">
      <div className={styles.topMenuWrapper}>
        <div className={styles.topMenu}>
          {menuItems.map((menuItem) => (
            <NavLink
              exact
              to={menuItem.pageURL}
              className={styles.link}
              activeClassName="selected"
              key={menuItem.id}
            >
              {menuItem.menuTitle}
            </NavLink>
          ))}
        </div>
        <LanguageSelector />
      </div>
    </div>
  </div>
);

export default withRouter(TopMenu);
