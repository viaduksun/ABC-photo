/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { BsStar } from 'react-icons/bs';

import { RiLoginCircleLine, RiAdminFill } from 'react-icons/ri';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MiddleMenu.module.scss';
import { loginModalOpenAction } from '../../../store/madals/actions';

export default function LoginIcon() {
  const isCurrentUser = useSelector((state) => state.admin.isLoggedIn);
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  // const currentUserData = useSelector((state) => state.admin.currentUser);

  const dispatch = useDispatch();
  const cartCounter = useSelector((state) => state.cart.totalCountCart);
  const favoritesCounter = useSelector((state) => state.favorites.favorites.length);
  const handleLogin = () => {
    dispatch(loginModalOpenAction());
  };
  return (
    <div className={styles.HeaderlinksBlockWrapper}>
      <div>
        {!isCurrentUser && (
          <div className={styles.LoginBlock}>
            <div className={styles.HeaderIconWrapper} onClick={handleLogin}>
              <RiLoginCircleLine className={styles.HeaderIconLogin} />
            </div>
            <p className={styles.HeaderIconText}>Вход</p>
          </div>
        )}
        {/* Если залогинился то показываем это: */}
        {isCurrentUser && !isAdmin && (
          <Link to="/profile" className={styles.HeaderLink}>
            <div className={styles.HeaderIconWrapper}>
              <FaUserAlt className={styles.HeaderIcon} />
            </div>
            <p className={styles.HeaderIconText}>Личный кабинет</p>
          </Link>
        )}
        {isCurrentUser && isAdmin && (
          <Link to="/profile" className={styles.HeaderLink}>
            <div className={styles.HeaderIconWrapper}>
              <RiAdminFill className={styles.HeaderIconAdmin} />
            </div>
            <p className={styles.HeaderIconText}>Личный кабинет</p>
          </Link>
        )}
      </div>
      <div>
        <Link to="/favorites" className={styles.HeaderLink}>
          <div className={styles.HeaderIconWrapper}>
            <BsStar
              className={classNames(styles.HeaderIcon, styles.HeaderIcon_favorites)}
            />
          </div>
          <p className={styles.HeaderIconText}>Избранное</p>
          {favoritesCounter !== 0 && (
            <p className={styles.HeaderFavoritesCounter}>{favoritesCounter}</p>
          )}
        </Link>
      </div>
      <div>
        <Link to="/cart" className={styles.HeaderLink}>
          <div className={styles.HeaderIconWrapper}>
            <MdShoppingCart
              className={classNames(styles.HeaderIcon, styles.HeaderIcon_cart)}
            />
          </div>
          <p className={styles.HeaderIconText}>Корзина</p>
          {cartCounter !== 0 && (
            <p className={styles.HeaderCartCounter}>{cartCounter}</p>
          )}
        </Link>
      </div>
    </div>
  );
}
