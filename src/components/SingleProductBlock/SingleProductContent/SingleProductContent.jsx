/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { addSingleProductToCartAction } from '../../../store/cart/actions';

import Button from '../../UI/Button/Button';
import styles from './SingleProductContent.module.scss';

const SingleProductContent = ({singleProduct}) => {
  const cart = useSelector((state) => state.cart.cart);
  const isInCart = cart.some((item) => item._id === singleProduct._id);
  const dispatch = useDispatch();
  const addProductToCartHandler = () => {
    if (singleProduct.quantity !== 0) {
      dispatch(addSingleProductToCartAction(singleProduct));
    }
  };
  return (
    <div className={styles.Wrapper}>
      <p className={styles.InStock}>
        {singleProduct.quantity !== 0 ? (
          <span>в наличии</span>
        ) : (
          <span style={{ color: 'red' }}>ожидается</span>
        )}
      </p>
      <p className={styles.Price}>{singleProduct.currentPrice} грн</p>

      <div className={styles.ButtonBuy}>
        <Button addClass={singleProduct.quantity !== 0 ? 'cart_green' : 'cart_disable'} onClick={addProductToCartHandler}>
          <span>Купить</span>
          {singleProduct.quantity !== 0 ? <FiShoppingCart /> : <MdRemoveShoppingCart style={{color: '#e91e49'}} />}
          &nbsp;
          {isInCart && <GiCheckMark />}
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
