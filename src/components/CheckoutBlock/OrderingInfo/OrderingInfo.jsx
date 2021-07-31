/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './OrderingInfo.module.scss';
import ContactDetails from './ContactDetails/ContactDetails';
import Delivery from './Delivery/Delivery';
import WaysOfPayment from './WaysOfPayment/WaysOfPayment';

const OrderingInfo = () => (
  <div className={styles.OrderingInfo}>
    <ContactDetails />
    {/* <Delivery />
    <WaysOfPayment /> */}
  </div>
);

export default OrderingInfo;
