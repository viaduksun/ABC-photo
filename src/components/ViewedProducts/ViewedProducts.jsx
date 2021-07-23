import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ViewedProducts.module.scss';
import ViewedProductsSlider from './ViewedProductsSlider';

const ViewedProducts = () => {
  const viewedProducts = useSelector((state) => state.viewedProducts.viewedProducts);
  return (
    <div className={styles.ViewedProductsSlider}>
      <div className="container">
        <h2 className={styles.Title}>Просмотренные товары</h2>
        {viewedProducts.length <= 4 ? (
          <ul className={styles.Products}>
            {viewedProducts.map((viewedProduct) => (
              <ProductCard product={viewedProduct} />
            ))}
          </ul>
        ) : <ViewedProductsSlider viewedProducts={viewedProducts} />}
      </div>
    </div>
  );
};

export default ViewedProducts;
