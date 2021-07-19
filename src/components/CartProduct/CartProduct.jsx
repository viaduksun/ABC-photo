/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdClose } from 'react-icons/md';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { cartDecrementAction, cartIncrementAction, deleteProductFromCartAction } from '../../store/cart/actions';
import styles from './CartProduct.module.scss';

const CartProduct = ({cartProduct}) => {
  const dispatch = useDispatch();
  const deleteProductFromCartHandler = () => {
    dispatch(deleteProductFromCartAction(cartProduct._id));
  };
  const incrementHandler = () => {
      dispatch(cartIncrementAction(cartProduct._id));
  };
  const decrementtHandler = () => {
    dispatch(cartDecrementAction(cartProduct._id));
  };

  return (
    <li className={styles.CartMainItem}>
      <div className={styles.CartMainItemProduct}>
        <div className={styles.CartMainItemProductImg}>
          <img src={cartProduct.imageUrls[0]} alt={cartProduct.imageUrls[0]} />
        </div>
        <div className={styles.CartMainItemProductContent}>
          <div className={styles.CartMainItemProductTitle}>
            {cartProduct.characteristics.model[1]}
          </div>
          <div className={styles.CartMainItemProductCode}>
            Код товара:
            {' '}
            {cartProduct.characteristics.artical[1]}
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
        <div className={styles.CartMainItemAmountNumbers}>{cartProduct.count}</div>
        <div className={styles.CartMainItemAmountPlus} onClick={incrementHandler}>+</div>
      </div>
      <div className={styles.CartMainItemTotal}>
        {cartProduct.currentPrice * cartProduct.count}
        {' '}
        грн
      </div>
      <div className={styles.CartMainItemBtnClose} onClick={deleteProductFromCartHandler}><MdClose /></div>
    </li>
  );
};

export default CartProduct;