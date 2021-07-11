/* eslint-disable react/prop-types */
import React from 'react';
import { MdClose } from 'react-icons/md';
import styles from './CartProduct.module.scss';

const CartProduct = ({cartProduct}) => {
  console.log('test');
  console.log(cartProduct);
  return (
    <li className={styles.CartMainItem}>
      <div className={styles.CartMainItemProduct}>
        <div className={styles.CartMainItemProductImg}>
          <img src={cartProduct.imageUrls[0]} alt={cartProduct.imageUrls[0]} />
        </div>
        <div className={styles.CartMainItemProductContent}>
          <div className={styles.CartMainItemProductTitle}>
            {cartProduct.name}
          </div>
          <div className={styles.CartMainItemProductCode}>
            Код товара:
            {' '}
            {cartProduct.artical}
          </div>
        </div>
      </div>
      <div className={styles.CartMainItemPrice}>{cartProduct.currentPrice}</div>
      <div className={styles.CartMainItemAmount}>
        <div className={styles.CartMainItemAmountMinus}>-</div>
        <div className={styles.CartMainItemAmountNumbers}>1</div>
        <div className={styles.CartMainItemAmountPlus}>+</div>
      </div>
      <div className={styles.CartMainItemTotal}>9137 грн</div>
      <div className={styles.CartMainItemBtnClose}><MdClose /></div>
    </li>
  );
};

export default CartProduct;