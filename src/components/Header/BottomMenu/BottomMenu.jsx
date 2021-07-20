/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MdViewHeadline, MdShoppingCart } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import MenuItems from '../../../Data/buttomMenuItems';
import getCatalog from '../../../api/getCatalog';
import SearchForm from '../SearchForm/SearchForm';
import BottomMenuLink from './BottomMenuLink';
import styles from './BottomMenu.module.scss';
import { setCatalog } from '../../../store/admin/actions';

const BottomMenu = ({ toggleMenu }) => {
  // const [catalog, setCatalog] = useState([]);
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCatalog());
    // getCatalog().then((res) => {
    //   console.log(res);
    //   setCatalog(res.data);
    // });
  }, [dispatch]);
  const catalog = useSelector((state) => state.admin.catalog);
  return (
    <div className={styles.BottomMenu}>
      <div className="container">
        <div className={styles.BottomMenuWrapp}>
          <ul className={styles.BottomUl}>
            {catalog.map((item) => {
              if (item.parentId === 'null') {
                return (
                  <BottomMenuLink
                    parentId={item._id}
                    path="/products"
                    title={item.name}
                    key={item.id}
                    page={currentPage}
                  />
                );
              }
              return null;
            })}
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
};

export default BottomMenu;
