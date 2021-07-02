import React from 'react';
import Equipment from './Equipment/Equipment';
import Matrix from './Matrix/Matrix';
import Producer from './Producer/Producer';
import Type from './Type/Type';
import styles from './ProductsFilter.module.scss';
import RangeSlider from './RangeSlider/RangeSlider';

const ProductsFilter = () => (
  <div className={styles.ProductsFilter}>
    <RangeSlider />
    <Type />
    <Producer />
    <Equipment />
    <Matrix />
  </div>
    );

export default ProductsFilter;
