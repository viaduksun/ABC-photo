/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductInCart.module.scss';

const ProductInCart = ({ cartProduct }) => {
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  // console.log(cartProduct);
  // console.log(cartProduct.count);
  let product = null;
  if (isLoggedIn) {
    product = cartProduct.product;
  } else {
    product = cartProduct;
  }
  return (
    <li className={styles.Main}>
      <div className={styles.MainImgAndName}>
        <div className={styles.MainImg}>
          <img src={product.imageUrls[0]} alt={product.name} />
        </div>
        <p className={styles.MainName}>
          {product.characteristics.model[1]}
          <br />
          <span>Код товара: {product.characteristics.artical[1]}</span>
        </p>
      </div>
      {isLoggedIn ? (
        <p className={styles.MainPrice}>
          {product.currentPrice * cartProduct.cartQuantity} грн{' '}
          <span>({cartProduct.cartQuantity} шт.)</span>
        </p>
      ) : (
        <p className={styles.MainPrice}>
          {product.currentPrice * product.count} грн{' '}
          <span>({product.count} шт.)</span>
        </p>
      )}
    </li>
  );
};

export default ProductInCart;
