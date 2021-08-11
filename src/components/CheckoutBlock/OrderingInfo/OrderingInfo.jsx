/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './OrderingInfo.module.scss';
import Delivery from './Delivery/Delivery';
import WaysOfPayment from './WaysOfPayment/WaysOfPayment';
import ContactDetails from './ContactDetails/ContactDetails';

const OrderingInfo = ({ currentUser }) => (
  <div className={styles.OrderingInfo}>
    <ContactDetails />
  </div>
);

export default OrderingInfo;
