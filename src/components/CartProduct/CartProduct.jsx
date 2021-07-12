/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCartAction } from '../../store/cart/actions';
import styles from './CartProduct.module.scss';

const CartProduct = ({cartProduct}) => {
  const dispatch = useDispatch();
  const deleteProductFromCartHandler = () => {
    console.log(cartProduct._id);
    dispatch(deleteProductFromCartAction(cartProduct._id));
  };

  const [counter, setCounter] = useState(1);

  const incrementHandler = () => {
      setCounter(counter + 1);
  };
  const decrementtHandler = () => {
    setCounter(counter - 1);
    if (counter <= 1) {
      deleteProductFromCartHandler();
    }
  };

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
      <div className={styles.CartMainItemPrice}>
        {cartProduct.currentPrice}
        {' '}
        грн
      </div>
      <div className={styles.CartMainItemAmount}>
        <div className={styles.CartMainItemAmountMinus} onClick={decrementtHandler}>-</div>
        <div className={styles.CartMainItemAmountNumbers}>{counter}</div>
        <div className={styles.CartMainItemAmountPlus} onClick={incrementHandler}>+</div>
      </div>
      <div className={styles.CartMainItemTotal}>
        {cartProduct.currentPrice * counter}
        {' '}
        грн
      </div>
      <div className={styles.CartMainItemBtnClose} onClick={deleteProductFromCartHandler}><MdClose /></div>
    </li>
  );
};

export default CartProduct;