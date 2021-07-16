import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MiddleMenu.module.scss';
import { loginModalOpenAction } from '../../../store/madals/actions';

export default function LoginIcon() {
  const dispatch = useDispatch();
  const cartCounter = useSelector((state) => state.cart.totalCountCart);
  const handleLogin = () => {
    dispatch(loginModalOpenAction());
  };
  return (
    <div className={styles.HeaderlinksBlockWrapper}>
      <div>
        <div className={styles.LoginBlock}>
          <div className={styles.HeaderIconWrapper}>
            <FaUserAlt className={styles.HeaderIcon} onClick={handleLogin} />
          </div>
          <p className={styles.HeaderIconText}>Вход/Регистрация</p>
        </div>

        {/* Если залогинился то показываем это: */}
        {/* <Link to="/profile" className={styles.HeaderLink}>
          <div className={styles.HeaderIconWrapper}>
            <FaUserAlt className={styles.HeaderIcon} />
          </div>
          <p className={styles.HeaderIconText}>Личный кабинет</p>
        </Link> */}
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
