/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MdViewHeadline, MdShoppingCart } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// import MenuItems from '../../../Data/buttomMenuItems';
// import getCatalog from '../../../api/getCatalog';
import SearchForm from '../SearchForm/SearchForm';
import BottomMenuLink from './BottomMenuLink';
import styles from './BottomMenu.module.scss';
import { setCatalog } from '../../../store/admin/actions';
import CartIcon from '../MiddleMenu/CartIcon';

const BottomMenu = ({ toggleMenu }) => {
  // const [catalog, setCatalog] = useState([]);
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const cartCounter = useSelector((state) => state.cart.totalCountCart);
  const catalog = useSelector((state) => state.admin.catalog);
  const favoriteCounter = useSelector(
    (state) => state.favorites.favorites.length
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    dispatch(setCatalog());
    // getCatalog().then((res) => {
    //   console.log(res);
    //   setCatalog(res.data);
    // });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const [headerFixed, setHeaderFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else if (window.scrollY < 200) {
      setHeaderFixed(false);
    }
  };

  const headerButtomStyles = classNames({
    [styles.BottomMenu]: true,
    [styles.BottomMenu_fixed]: headerFixed,
  });

  return (
    <div className={headerButtomStyles}>
      <div className="container">
        <div className={styles.BottomMenuWrapp}>
          <ul className={styles.BottomUl}>
            {catalog.map((item) => {
              if (item.parentId === 'null') {
                return (
                  <BottomMenuLink
                    parentId={item._id}
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
            <Link to="/favorites">
              <div className={styles.favoriteIcon}>
                <AiFillStar style={{ fontSize: '25px' }} />
                {favoriteCounter !== 0 && (
                  <span className={styles.favoriteIconCounter}>
                    {favoriteCounter}
                  </span>
                )}
              </div>
            </Link>
            <Link to="/cart">
              <div className={styles.cartIcon}>
                <MdShoppingCart style={{ fontSize: '25px' }} />
                {cartCounter !== 0 && (
                <span className={styles.cartIconCounter}>
                  {cartCounter}
                </span>
                )}
              </div>
            </Link>
            <SearchForm />
            <div className={styles.BurgerIcon}>
              <MdViewHeadline onClick={toggleMenu} />
            </div>
          </div>
          {headerFixed && (
            <div className={styles.cartIconFixed}>
              <CartIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
