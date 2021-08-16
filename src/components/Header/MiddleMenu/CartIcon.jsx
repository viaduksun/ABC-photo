/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './MiddleMenu.module.scss';

export default function CartIcon() {
  const cartCounter = useSelector((state) => state.cart.totalCountCart);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else if (window.scrollY < 200) {
      setHeaderFixed(false);
    }
  };
  const headerCartCounterStyles = classNames({
    [styles.HeaderCartCounter]: true,
    [styles.HeaderCartCounter_fixed]: headerFixed,
  });
  const HeaderIconTextStyles = classNames({
    [styles.HeaderIconText]: true,
    [styles.HeaderIconText_fixed]: headerFixed,
  });
  const HeaderIconWrappertStyles = classNames({
    [styles.HeaderIconWrapper]: true,
    [styles.HeaderIconWrapper_fixed]: headerFixed,
  });
  return (
    <div>
      <Link to="/cart" className={styles.HeaderLink}>
        <div className={HeaderIconWrappertStyles}>
          <MdShoppingCart
            className={classNames(styles.HeaderIcon, styles.HeaderIcon_cart)}
          />
        </div>
        <p className={HeaderIconTextStyles}>Корзина</p>
        {cartCounter !== 0 && (
          <p className={headerCartCounterStyles}>{cartCounter}</p>
        )}
      </Link>
    </div>
  );
}
