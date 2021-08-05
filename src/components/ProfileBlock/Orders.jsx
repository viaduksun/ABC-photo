/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { BiSad } from 'react-icons/bi';
import getCustomerOrders from '../../api/getCustomerOrders';

import Loader from '../UI/Loader/Loader';
import CartItem from './CartItem/CartItem';
import styles from './Orders.module.scss';

const Orders = () => {
  const [ordersDB, setOrdersDB] = useState([]);
  const [active, setActive] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isItems, setIsItems] = useState(false);
  useEffect(() => {
    getCustomerOrders()
      .then((response) => {
        /* Do something with loggedInCustomer */
        console.log('ORDERS', response);
        setOrdersDB(response.data);

        setIsLoading(false);
        if (response.data.length === 0) {
          setIsItems(true);
        }
      })
      .catch((err) => {
        /* Do something with error */
        console.log(err);
      });
  }, []);
  const toggleActive = (itemNo) => {
    console.log(itemNo, '===', active);
    if (itemNo === active) {
      console.log('Mach');
      return setActive(null);
    }
    return setActive(itemNo);
  };

  return (
    <>
      <div className={styles.OrdersWrapper}>
        <div className={styles.Header}>
          <p>Номер заказа</p>
          <p>Количество товаров</p>
          <p>Дата</p>
          <p>Сумма</p>
          <p>Статус</p>
        </div>
        {ordersDB.map((item) => (
          <CartItem item={item} toggleActive={toggleActive} active={active} />
        ))}
        {isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}

        <div className={isItems ? styles.NoOrdersActive : styles.NoOrders}>
          <h2>Вы еще ничего у нас не покупали</h2>
          <BiSad className={styles.Emoji} />
        </div>
      </div>
    </>
  );
};

export default Orders;
