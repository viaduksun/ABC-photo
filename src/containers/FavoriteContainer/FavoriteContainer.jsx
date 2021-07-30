/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FaRegGrinStars} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuGridR } from 'react-icons/cg';
import ProductCardFavorite from '../../components/ProductCardFavorite/ProductCardFavorite';
import { favoriteChangeOrderAction, showGridAction } from '../../store/favorites/actions';

import styles from './FavoriteContainer.module.scss';
import ProductCardFavoriteLine from '../../components/ProductCardFavoriteLine/ProductCardFavoriteLine';

const FavoriteContainer = () => {
    const favoriteProducts = useSelector((state) => state.favorites.favorites);
    const showGrid = useSelector((state) => state.favorites.showGrid);
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
  const switchHandler = () => {
    dispatch(showGridAction());
  };
  return (
    <div className={styles.Wrapper}>
      <div className="container">
        <div className={styles.Header}>
          <h2 className={styles.Title}>Избранные товары</h2>
          {favoriteProducts.length !== 0 && (
          <div
            onClick={switchHandler}
            className={showGrid ? styles.HeaderIcon : styles.HeaderIconRotate}
          >
            {showGrid ? <GiHamburgerMenu /> : <CgMenuGridR />}
          </div>
          )}
        </div>
        {showGrid ? (
          <div>
            {favoriteProducts.length !== 0 ? (
              <ul className={styles.Main}>
                {favoriteProducts.sort(sortFavorites).map((favoriteProduct) => (
                  <ProductCardFavorite
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
        ) : (
          <div>
            {favoriteProducts.length !== 0 ? (
              <ul className={styles.MainCardLine}>
                {favoriteProducts.sort(sortFavorites).map((favoriteProduct) => (
                  <ProductCardFavoriteLine
                    product={favoriteProduct}
                    dragStart={dragStartHandler}
                    dragEnd={dragEndHandler}
                    dragOver={dragOverHandler}
                    drop={dropHandler}
                    key={favoriteProduct._id}
                    dragable="false"
                  />
                      ))}
              </ul>
                  ) : <p className={styles.EmptyFavorites}><FaRegGrinStars style={{color: '#7D7D7D'}} /></p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteContainer;
