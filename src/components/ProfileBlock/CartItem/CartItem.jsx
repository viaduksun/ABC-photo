/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './CartItem.module.scss';

const CartItem = ({ item, toggleActive, active }) => (
  // const [active2, setActive2] = useState(false);
  <div className={styles.CartItemWrapper}>
    <div className={styles.CartItem}>
      <p>{item.orderNo}</p>
      <p>{item.products.length}</p>
      <p>{item.date.split('T')[0]}</p>
      <p>{item.totalSum}</p>
      <p style={{ color: item.canceled ? 'red' : 'green' }}>
        {item.canceled ? 'Отменен' : 'Активен'}
      </p>
      <div className={styles.arrowWrapper}>
        <BsChevronDown
          className={classNames({
            [styles.arrow]: true,
            [styles.arrow_active]: active === item.orderNo,
          })}
          onClick={() => toggleActive(item.orderNo)}
        />
      </div>
    </div>
    <div
      className={classNames({
        [styles.orderDetailsContainer]: true,
        [styles.orderDetailsContainer_active]: active === item.orderNo,
      })}
    >
      <div className={styles.orderDetailsHeader}>
        <p>Производитель</p>
        <p>Модель</p>
        <p>Количество</p>
        <p>Стоимость</p>
        <p>Итого</p>
      </div>
      <div className={styles.orderDetailsItemWrapper}>
        {item.products.map((product) => (
          <div className={styles.orderDetailsItem}>
            <p>{product.product.brand}</p>
            <p>{product.product.model}</p>
            <p>{product.cartQuantity}</p>
            <p>{product.product.currentPrice}</p>
            <p>{product.product.currentPrice * product.cartQuantity}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default CartItem;
