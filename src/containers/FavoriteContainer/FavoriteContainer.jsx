import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './FavoriteContainer.module.scss';

const FavoriteContainer = () => {
    console.log('favoriteContainer');
    const favoriteProducts = useSelector((state) => state.favorites.favorites);
    console.log(favoriteProducts);
    return (
      <div className={styles.Wrapper}>
        <div className="container">
          <h2 className={styles.Title}>Избранные товары</h2>
          <ul className={styles.Main}>
            {favoriteProducts.map((favoriteProduct) => (
              <ProductCard product={favoriteProduct} />
              ))}
          </ul>
        </div>
      </div>
    );
};

export default FavoriteContainer;
