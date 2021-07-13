import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './MiddleMenu.module.scss';

export default function LoginIcon() {
  const cartCounter = useSelector((state) => state.cart.cart.length);
  return (
    <div className={styles.HeaderlinksBlockWrapper}>
      <div>
        <Link to="/profile" className={styles.HeaderLink}>
          <div className={styles.HeaderIconWrapper}>
            <FaUserAlt className={styles.HeaderIcon} />
          </div>
          <p className={styles.HeaderIconText}>Вход</p>
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
          {cartCounter !== 0 && <p className={styles.HeaderCartCounter}>{cartCounter}</p>}
        </Link>
      </div>
    </div>
  );
}
