/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import menuItems from '../../../Data/menuItems';
import styles from './TopMenu.module.scss';
import deleteCart from '../../../api/deleteCart';
import { getCartFromDB_action } from '../../../store/cart/actions';
import postConfigs from '../../../api/configs';

const TopMenu = () => {
  const dispatch = useDispatch();
  // const handleGetCart = () => {
  //   console.log('GET CART');
  //   dispatch(getCartFromDB_action());
  // };
  // const handleClearCart = () => {
  //   console.log('DELETE CART');
  //   deleteCart();
  // };
  // const handleConfigs = () => {
  //   console.log('POST CONF');
  //   postConfigs();
  // };
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
          </div>
          {/* <Button onClick={handleGetCart} addClass="admin-primary">
            get cart from DB
          </Button>
          <Button onClick={handleClearCart} addClass="admin-cancel">
            delete cart from DB
          </Button> */}

          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopMenu);
