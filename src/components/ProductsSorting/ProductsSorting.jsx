import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductsSorting.module.scss';

const ProductsSorting = () => {
  const allProducts = useSelector((state) => state.productsPage.products.length);
  return (
    <div className={styles.ProductsSorting}>
      <div className={styles.ProductsSortingLeft}>
        <div className={styles.NumberOf}>
          1 -
          {' '}
          {allProducts}
          {' '}
          из
          {' '}
          {allProducts}
        </div>
        <div className={styles.Show}>
          <span>Показывать</span>
          <select className={styles.SelectAmount}>
            <option>3 товаров</option>
            <option>6 товаров</option>
            <option>9 товаров</option>
          </select>
        </div>
      </div>
      <div className={styles.ProductsSortingRight}>
        <span>Сортировать по</span>
        <select className={styles.SelectPrice}>
          <option>Возростанию цены</option>
          <option>По уменьшению цены</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsSorting;
