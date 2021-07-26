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
  const [modalActive, setModalActive] = useState(false);
  const handleOrderConfirm = () => {
    createOrder();
    // setModalActive(true);
  };

  const cartProducts = useSelector((state) => state.cart.cart);
  const totalSumCart = useSelector((state) => state.cart.totalSumCart);

  return (
    <div className={styles.ProductsInCart}>
      <div className={styles.Header}>
        <h2>Товары в корзине</h2>
      </div>
      <ul>
        {cartProducts.map((cartProduct) => (
          <ProductInCart
            cartProduct={cartProduct}
            key={cartProduct._id}
            totalSumCart={totalSumCart}
          />
        ))}
      </ul>
      <div className={styles.Footer}>
        <p className={styles.FooterDeliveryPrice}>Доставка - 150 грн</p>
        <p className={styles.FooterTotalSum}>
          Сумма заказа: {totalSumCart}
          <span> грн</span>
        </p>
        <Button addClass="ordering_confirm" onClick={handleOrderConfirm}>
          Подтвердить
        </Button>
      </div>
      <FinalModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default ProductsInCart;
