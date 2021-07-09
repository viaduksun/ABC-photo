/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
// import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
// import cardProduct from '../../assets/img/CardProduct/cardProduct.png';

const ProductCard = ({product}) => {
  if (!product) return null;
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
          {(product.previousPrice
          && (
          <span className={styles.ProductCardOldPrice}>
            {product.previousPrice}
            <span> грн</span>
          </span>
))}
          <br />
          {product.previousPrice
          ? (
            <span className={styles.ProductCardNewPrice}>
              {product.currentPrice}
              <span> грн</span>
            </span>
)
          : <span className={styles.ProductCardPrice}> 21 473 грн</span>}
          <br />
          {product.quantity !== 0
            ? <span className={styles.ProductCardInStock}>в наличии</span>
          : <span className={styles.ProductCardIsExpected}>ожидается</span>}
        </p>
        <div className={styles.ProductCardIconCart}><BiCart /></div>
      </div>
      <div className={styles.ProductCardInfo}>
        <p>
          {product.description ? `${product.description.split(' ').slice(0, 40).join(' ')}...` : null}
        </p>
      </div>
    </div>
  );
};

// ProductCard.propTypes = {
//   product: PropTypes.objectOf.isRequired
// };

export default ProductCard;
