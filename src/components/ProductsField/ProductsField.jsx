/* eslint-disable operator-linebreak */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ProductsField.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLine from '../ProductCardLine/ProductCardLine';
import Pagination from '../Pagination/Pagination';

const ProductsField = ({ products }) => {
  const showGrid = useSelector((state) => state.productsPage.showGrid);
  const scrollToTopHandler = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };
  return (
    <div className={styles.ProductsField}>
      <div className={styles.ProductsFieldGridWrapp}>
        {showGrid ? (
          <div className={styles.ProductsFieldGrid}>
            {products &&
              products.map((product) => (
                <ProductCard
                  product={product}
                  key={product._id}
                  dragable={false}
                />
              ))}
          </div>
        ) : (
          <div className={styles.ProductsFieldLine}>
            {products &&
              products.map((product) => (
                <ProductCardLine product={product} key={product._id} />
              ))}
          </div>
        )}
      </div>
      <Pagination scrollTo={scrollToTopHandler} />
    </div>
  );
};

ProductsField.propTypes = {
  products: PropTypes.arrayOf,
};
ProductsField.defaultProps = {
  products: [],
};

export default React.memo(ProductsField);
