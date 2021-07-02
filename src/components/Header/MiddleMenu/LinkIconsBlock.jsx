import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import classNames from 'classnames';
import styles from './MiddleMenu.module.scss';

export default function LoginIcon() {
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
        </Link>
      </div>
    </div>
  );
}
