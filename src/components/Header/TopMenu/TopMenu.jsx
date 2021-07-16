import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import menuItems from '../../../Data/menuItems';
import styles from './TopMenu.module.scss';

const TopMenu = () => {
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  return (
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
            {isAdmin && (
              <NavLink
                exact
                to="/admin"
                className={styles.link}
                activeClassName="selected"
                key="admin"
              >
                Admin
              </NavLink>
            )}
          </div>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopMenu);
