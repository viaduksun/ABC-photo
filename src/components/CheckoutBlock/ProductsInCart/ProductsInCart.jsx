/* eslint-disable operator-linebreak */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductsInCart.module.scss';
import Button from '../../UI/Button/Button';
import FinalModal from '../../FinalModal/FinalModal';
import ProductInCart from './ProductInCart/ProductInCart';
import createOrder from '../../../api/createOrder';

const ProductsInCart = () => {
  // const [modalActive, setModalActive] = useState(false);
  // const handleOrderConfirm = () => {
  //   setModalActive(true);
  // };

  const cartDB = useSelector((state) => state.cart.cartDB);
  const cart = useSelector((state) => state.cart.cart);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const totalSumCart = useSelector((state) => state.cart.totalSumCart);

  console.log(cartDB);
  let cartArr = null;
  if (isLoggedIn) {
    cartArr = cartDB;
  } else {
    cartArr = cart;
  }
  return (
    <div className={styles.ProductsInCart}>
      <div className={styles.Header}>
        <h2>Товары в корзине</h2>
      </div>
      {Object.keys(cartArr).length !== 0 && (
        <ul>
          {isLoggedIn &&
            cartArr.map((cartProduct) => (
              <ProductInCart
                cartProduct={cartProduct}
                key={cartProduct._id}
                totalSumCart={totalSumCart}
              />
            ))}
          {!isLoggedIn &&
            cartArr.map((cartProduct) => (
              <ProductInCart
                cartProduct={cartProduct}
                key={cartProduct._id}
                totalSumCart={totalSumCart}
              />
            ))}
        </ul>
      )}

      <div className={styles.Footer}>
        <p className={styles.FooterDeliveryPrice}>Доставка - 150 грн</p>
        <p className={styles.FooterTotalSum}>
          Сумма заказа: {totalSumCart}
          <span> грн</span>
        </p>
        {/* <Button addClass="ordering_confirm" onClick={handleOrderConfirm}>
          Подтвердить
        </Button> */}
        <button
          type="submit"
          form="orderCheckoutForm"
          className="Button Button_ordering_confirm"
        >
          Подтвердить
        </button>
      </div>
      {/* <FinalModal active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
};

export default ProductsInCart;
