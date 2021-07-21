import React from 'react';
import { useSelector } from 'react-redux';
import {FaRegGrinStars} from 'react-icons/fa';
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
          {favoriteProducts.length !== 0 ? (
            <ul className={styles.Main}>
              {favoriteProducts.map((favoriteProduct) => (
                <ProductCard product={favoriteProduct} />
              ))}
            </ul>
) : <p className={styles.EmptyFavorites}><FaRegGrinStars style={{color: '#7D7D7D'}} /></p>}
         
        </div>
      </div>
    );
};

export default FavoriteContainer;
