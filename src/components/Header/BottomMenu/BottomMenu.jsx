/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MdViewHeadline, MdShoppingCart } from 'react-icons/md';
import { AiFillStar} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuItems from '../../../Data/buttomMenuItems';
import getCatalog from '../../../api/getCatalog';
import SearchForm from '../SearchForm/SearchForm';
import BottomMenuLink from './BottomMenuLink';
import styles from './BottomMenu.module.scss';
import { setCatalog } from '../../../store/admin/actions';

const BottomMenu = ({ toggleMenu }) => {
  // const [catalog, setCatalog] = useState([]);
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const cartCounter = useSelector((state) => state.cart.totalCountCart);
  const favoriteCounter = useSelector((state) => state.favorites.favorites.length);
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
            <Link to="/cart">
              <div className={styles.cartIcon}>
                <MdShoppingCart style={{fontSize: '30px'}} />
                {cartCounter !== 0 && <span className={styles.cartIconCounter}>{cartCounter}</span>}
               
              </div>
            </Link>
            <Link to="/favorites">
              <div className={styles.favoriteIcon}>
                <AiFillStar style={{fontSize: '30px'}} />
                {favoriteCounter !== 0 && <span className={styles.favoriteIconCounter}>{favoriteCounter}</span>}
              </div>
            </Link>
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
