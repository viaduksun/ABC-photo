import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

const ProductCard = () => (
  <Link to="/single-product">
    <div className={styles.ProductCard}>
      <h2>Product card</h2>
    </div>
  </Link>
);

export default ProductCard;
