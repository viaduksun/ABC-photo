/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ProductInCart.module.scss';

const ProductInCart = ({cartProduct}) => {
    console.log(cartProduct);
    console.log(cartProduct.count);
    return (
      <li className={styles.Main}>
        <div className={styles.MainImgAndName}>
          <div className={styles.MainImg}>
            <img src={cartProduct.imageUrls[0]} alt={cartProduct.name} />
          </div>
          <p className={styles.MainName}>
            {cartProduct.characteristics.model[1]}
            <br />
            <span>
              Код товара:
              {' '}
              {cartProduct.characteristics.artical[1]}
            </span>
          </p>
        </div>
        <p className={styles.MainPrice}>
          {cartProduct.currentPrice * cartProduct.count}
          {' '}
          грн
          {' '}
          <span>
            (
            {cartProduct.count}
            {' '}
            шт.)

          </span>
          
        </p>
      </li>
    );
};

export default ProductInCart;