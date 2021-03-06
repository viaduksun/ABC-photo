/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addSingleProductToCartAction,
  addToCartMongoDB,
} from '../../../store/cart/actions';
import ModalSubscribeProduct from '../../UI/ModalSubscribeProduct/ModalSubscribeProduct';
import Button from '../../UI/Button/Button';
import styles from './SingleProductContent.module.scss';
import './SingleProductContent.scss';
import getOneProduct from '../../../api/getOneProduct';

const SingleProductContent = ({ singleProduct }) => {
  const cart = useSelector((state) => state.cart.cart);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isInCart = cart.some((item) => item._id === singleProduct._id);
  const dispatch = useDispatch();
  const [moveToCart, setMoveToCart] = useState(false);
  const addProductToCartHandler = () => {
    if (singleProduct.quantity !== 0) {
      setTimeout(() => {
        if (isLoggedIn) {
          dispatch(addToCartMongoDB(singleProduct));
        } else {
          dispatch(addSingleProductToCartAction(singleProduct));
        }
      }, 1600);
      setMoveToCart(true);
    }
    setTimeout(() => {
      setMoveToCart(false);
    }, 1500);
  };

  const [modalActive, setModalActive] = useState(false);
  const openModalhandler = () => {
    setModalActive(true);
  };
  return (
    <>
      <ModalSubscribeProduct active={modalActive} setActive={setModalActive} />
      <div className={styles.Wrapper}>
        <div className={styles.BlockLeft}>
          <p className={styles.InStock}>
            {singleProduct.quantity !== 0 ? (
              <span>?? ??????????????</span>
            ) : (
              <span style={{ color: '#e91e49' }}>??????????????????</span>
            )}
          </p>
          <p className={styles.Price}>{singleProduct.currentPrice} ??????</p>

          <div className={styles.ButtonBuy}>
            {singleProduct.quantity !== 0 ? (
              <Button
                onClick={addProductToCartHandler}
                disabled={moveToCart}
                addClass="cart_green"
              >
                ????????????
                <FiShoppingCart />
                &nbsp;
                {isInCart && <GiCheckMark />}
              </Button>
            ) : (
              <Button addClass="cart_grey" onClick={openModalhandler}>
                ???????????????? ?? ?????????????????????? ????????????
              </Button>
            )}
          </div>
        </div>
        <div>
          <p className={styles.Delivery}>????????????????</p>
          <ul className={styles.DeliveryList}>
            <li>??? ???????????????? ???? ???????? ??????????????</li>
            <li>??? ???????????? ???????????? ?????? ??????????????????</li>
            <li>??? ???????????????? ??????????????????</li>
          </ul>
        </div>
        <div className="MoveToCartBlock">
          <div
            className={`MoveToCartItem  ${
              moveToCart ? 'MoveToCartItem_isOpen' : 'MoveToCartItem_isClose'
            }`}
          >
            <img src={singleProduct.imageUrls[0]} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

SingleProductContent.propTypes = {
  singleProduct: PropTypes.objectOf,
};
SingleProductContent.defaultProps = {
  singleProduct: {}
};

export default SingleProductContent;
