import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartBlock.module.scss';

const CartBlock = () => (
  <div className={styles.CartBlock}>
    <h1>My cart block</h1>
    <div className={styles.btnBox}>
      <Link to="/products">
        <button type="button" className={styles.btn}>
          Продолжить покупки
        </button>
      </Link>
      <Link to="/checkout">
        <button type="button" className={styles.btn}>
          Оформить заказ
        </button>
      </Link>
    </div>
  </div>
);

export default CartBlock;
