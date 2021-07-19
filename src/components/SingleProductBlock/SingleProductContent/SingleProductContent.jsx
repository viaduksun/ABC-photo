/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addSingleProductToCartAction } from '../../../store/cart/actions';

import Button from '../../UI/Button/Button';
import styles from './SingleProductContent.module.scss';

const SingleProductContent = ({singleProduct}) => {
  const dispatch = useDispatch();
  const addProductToCartHandler = () => {
    dispatch(addSingleProductToCartAction(singleProduct));
  };
  return (
    <div className={styles.Wrapper}>
      <p className={styles.InStock}>
        {singleProduct.quantity !== 0 ? <span>в наличии</span> : <span style={{color: 'red'}}>ожидается</span>}
      </p>
      <p className={styles.Price}>{singleProduct.currentPrice} грн</p>

      <div className={styles.ButtonBuy}>
        <Button addClass="cart_green" onClick={addProductToCartHandler}>
          <span>Купить</span>
          <FiShoppingCart />
        </Button>
      </div>
      <p className={styles.Delivery}>Доставка</p>
      <ul className={styles.DeliveryList}>
        <li>• Доставка по всей Украине</li>
        <li>• Оплата товара при получении</li>
        <li>• Возможен самовывоз</li>
      </ul>
    </div>
  );
};

export default SingleProductContent;
