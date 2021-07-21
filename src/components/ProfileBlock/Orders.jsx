/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import styles from './Orders.module.scss';

const Orders = () => {
  const [itemsOrder, setItems] = useState([]);
  useEffect(() => {
    fetch('/api/allOrders.json')
      .then((res) => res.json())
      .then((result) => {
        setItems(result.orders);
      }, []);
  });
  const lastOrder = itemsOrder[itemsOrder.length - 1];
  return (
    <div>
      <div className={styles.Header}>
        <p>Номер заказа</p>
        <p>К-во товаров</p>
        <p>Дата</p>
        <p>Сумма</p>
        <p>Статус</p>
      </div>
      <p className={styles.LastOrderP}>Ваш последний заказ</p>
      {lastOrder ? (
        <div className={styles.LastOrder}>
          <p>{lastOrder.orderNumber}</p>
          <p>{lastOrder.value}</p>
          <p>{lastOrder.date}</p>
          <p>{lastOrder.price}</p>
          <p style={{ color: lastOrder.status ? 'green' : 'red' }}>
            {lastOrder.status ? 'Выполнен' : 'Отменен'}
          </p>
        </div>
      ) : null}
      <p className={styles.LastOrderP}>Ваши заказы</p>
      <div>
        {itemsOrder.map((item) => (
          <div className={styles.LastOrder}>
            <p>{item.orderNumber}</p>
            <p>{item.value}</p>
            <p>{item.date}</p>
            <p>{item.price}</p>
            <p style={{ color: item.status ? 'green' : 'red' }}>
              {item.status ? 'Выполнен' : 'Отменен'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
