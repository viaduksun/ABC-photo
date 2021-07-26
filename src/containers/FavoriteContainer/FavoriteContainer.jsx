/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FaRegGrinStars} from 'react-icons/fa';
import ProductCard from '../../components/ProductCard/ProductCard';
import { favoriteChangeOrderAction } from '../../store/favorites/actions';
import styles from './FavoriteContainer.module.scss';

const FavoriteContainer = () => {
    console.log('favoriteContainer');
    const favoriteProducts = useSelector((state) => state.favorites.favorites);

    const [currentProduct, setCurrentProduct] = useState([]);
    const dispatch = useDispatch();

    const dragStartHandler = (e, product) => {
      setCurrentProduct(product);
    };
    const dragEndHandler = (e) => {
        e.target.style.background = 'white';
    };
    const dragOverHandler = (e) => {
        e.preventDefault();
        e.target.style.background = 'grey';
    };
    const dropHandler = (e, product) => {
        e.preventDefault();
        dispatch(favoriteChangeOrderAction(product, currentProduct));
        e.target.style.background = 'white';
    };
    const sortFavorites = (a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
  };
    return (
      <div className={styles.Wrapper}>
        <div className="container">
          <h2 className={styles.Title}>Избранные товары</h2>
          {favoriteProducts.length !== 0 ? (
            <ul className={styles.Main}>
              {favoriteProducts.sort(sortFavorites).map((favoriteProduct) => (
                <ProductCard
                  product={favoriteProduct}
                  dragStart={dragStartHandler}
                  dragEnd={dragEndHandler}
                  dragOver={dragOverHandler}
                  drop={dropHandler}
                  key={favoriteProduct._id}
                />
              ))}
            </ul>
          ) : <p className={styles.EmptyFavorites}><FaRegGrinStars style={{color: '#7D7D7D'}} /></p>}
        </div>
      </div>
    );
};

export default FavoriteContainer;
