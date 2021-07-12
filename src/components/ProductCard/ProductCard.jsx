/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './ProductCard.module.scss';
import { addProductToCartAction } from '../../store/cart/actions';
// import cardProduct from '../../assets/img/CardProduct/cardProduct.png';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  if (!product) return null;

  const addProductToCartHandler = () => {
    console.log('Click');
    dispatch(addProductToCartAction(product));
  };
  return (
    <div className={styles.ProductCard}>
      <Link to="/single-product">
        <div className={styles.ProductCardImg}>
          <img src={product.imageUrls[0]} alt={product.imageUrls[0]} />
          {product.hitSale === 'да' && <div className={styles.ProductCardImgHitSale}>Хит продаж</div>}
        </div>
        <h2 className={styles.ProductCardName}>
          {product.name}
        </h2>
      </Link>
      <div className={styles.ProductCardPriceAndIconCart}>
        <p className={styles.ProductCardPriceBlock}>
          {(product.previousPrice !== 0
          && (
          <span className={styles.ProductCardOldPrice}>
            {product.previousPrice}
            {' '}
            грн
          </span>
))}
          <br />
          {product.previousPrice
          ? (
            <span className={styles.ProductCardNewPrice}>
              {product.currentPrice}
              {' '}
              грн
            </span>
)
          : (
            <span className={styles.ProductCardPrice}>
              {product.currentPrice}
              {' '}
              грн
            </span>
)}
          <br />
          {product.quantity !== 0
            ? <span className={styles.ProductCardInStock}>в наличии</span>
          : <span className={styles.ProductCardIsExpected}>ожидается</span>}
        </p>
        <div className={styles.ProductCardIconCart} onClick={addProductToCartHandler}><BiCart /></div>
      </div>
      <div className={styles.ProductCardInfo}>
        <p>
          {product.description ? `${product.description.split(' ').slice(0, 35).join(' ')}...` : null}
        </p>
      </div>
    </div>
  );
};

// ProductCard.propTypes = {
//   product: PropTypes.objectOf.isRequired
// };

export default ProductCard;
