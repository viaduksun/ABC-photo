import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CheckoutBlock.module.scss';
import OrderingInfo from './OrderingInfo/OrderingInfo';
import ProductsInCart from './ProductsInCart/ProductsInCart';

const CheckoutBlock = () => {
  const currentUser = useSelector((state) => state.admin.currentUser);

  return (
    <div className={styles.CheckoutBlock}>
      <div className="container">
        <h1 className={styles.CheckoutBlockTitle}>Оформление заказа</h1>
        <div className={styles.CheckoutBlockMain}>
          <OrderingInfo currentUser={currentUser} />
          <ProductsInCart />
        </div>
      </div>
    </div>
  );
};

export default CheckoutBlock;
