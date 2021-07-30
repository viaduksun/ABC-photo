/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { BiCart } from 'react-icons/bi';
import { GiCheckMark } from 'react-icons/gi';
import styles from './ProductCardFavoriteLine.module.scss';
import { addProdductToFavoritesAction, deleteProdductFromFavoritesAction } from '../../store/favorites/actions';
import { addProductToCartAction } from '../../store/cart/actions';
import { setFlagInCartAction } from '../../store/products/actions';
import { setSingleProductAction } from '../../store/singleProduct/actions';
import { addViewedProductAction } from '../../store/viewedProducts/actions';

const ProductCardLine = ({
    product,
    dragStart,
    dragEnd,
    dragOver,
    drop
}) => {
    console.log(product);
    const cart = useSelector((state) => state.cart.cart);
    const popupIsOpen = useSelector((state) => state.cart.popupIsOpen);
    const favorites = useSelector((state) => state.favorites.favorites);
    const viewedProducts = useSelector((state) => state.viewedProducts.viewedProducts);
    const isInCart = cart.some((item) => item._id === product._id);
    const isInFavorites = favorites.some((item) => item._id === product._id);
    const isInViewedProducts = viewedProducts.some((item) => item._id === product._id);
    const dispatch = useDispatch();
    if (!product) return null;
    const addProductToCartHandler = () => {
      if (product.quantity !== 0) {
        dispatch(addProductToCartAction(product));
        dispatch(setFlagInCartAction(product));
      }
    };

    const addProductToFavoritesHandler = () => {
        if (isInFavorites) {
          dispatch(deleteProdductFromFavoritesAction(product));
        } else {
          dispatch(addProdductToFavoritesAction(product));
        }
      };
    
      const dispatchSingleProductHandler = () => {
        dispatch(setSingleProductAction(product));
        if (!isInViewedProducts) {
          dispatch(addViewedProductAction(product));
        }
      };

    return (
      <div
        className={styles.ProductCardLine}
        onDragStart={(e) => dragStart(e, product)}
        onDragLeave={(e) => dragEnd(e)}
        onDragEnd={(e) => dragEnd(e)}
        onDragOver={(e) => dragOver(e)}
        onDrop={(e) => drop(e, product)}
        draggable
      >
        <Link to="/single-product" onClick={dispatchSingleProductHandler}>
          <div className={styles.ProductCardImg}>
            <img src={product.imageUrls[0]} alt={product.imageUrls[0]} />
            {product.hit === 'yes' && <div className={styles.ProductCardImgHitSale}>Хит продаж</div>}
          </div>
        </Link>
        <div className={styles.ProductCardText}>
          <h2 className={styles.ProductCardName}>
            {product.characteristics.model[1]}
          </h2>
          <div className={styles.ProductCardInfo}>
            <p>
              {product.description ? `${product.description.split(' ').slice(0, 35).join(' ')}...` : null}
            </p>
          </div>
        </div>
        <div className={styles.ProductCardPriceAndIconCart}>
          <p className={styles.ProductCardPriceBlock}>
            {(product.previousPrice !== 0
          ? (
            <span className={styles.ProductCardOldPrice}>
              {product.previousPrice}
              {' '}
              грн
            </span>
            ) : <p className={styles.ProductCardOldPriceSpace}>&nbsp;</p>)}
            <br />
            {product.previousPrice
          ? (
            <span className={styles.ProductCardNewPrice}>
              {product.currentPrice}
              {' '}
              грн
            </span>
            )
          : (
            <span className={styles.ProductCardPrice}>
              {product.currentPrice}
              {' '}
              грн
            </span>
            )}
            <br />
            {product.quantity !== 0
            ? <span className={styles.ProductCardInStock}>в наличии</span>
          : <span className={styles.ProductCardIsExpected}>ожидается</span>}
          </p>
          <div className={styles.ProductCardLineFavoriteIconCartIcon}>
            <div className={styles.ProductFavorite} onClick={addProductToFavoritesHandler}>
              {isInFavorites ? <span className={styles.ProductFavoriteColor}><BsFillStarFill /></span> : <span className={styles.ProductFavoriteTransparent}><BsStar /></span>}
            </div>
            <button type="button" disabled={popupIsOpen} className={styles.ProductCardIconCart} onClick={addProductToCartHandler}>
              {product.quantity !== 0 ? <BiCart /> : <MdRemoveShoppingCart style={{color: '#e91e49'}} />}
              {isInCart && <span><GiCheckMark /></span>}
            </button>
          </div>
        </div>
      
      </div>
    );
};

export default ProductCardLine;