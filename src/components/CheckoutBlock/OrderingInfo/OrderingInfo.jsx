/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './OrderingInfo.module.scss';
import ContactDetails from './ContactDetails/ContactDetails';
import Delivery from './Delivery/Delivery';
import WaysOfPayment from './WaysOfPayment/WaysOfPayment';

const OrderingInfo = ({ currentUser }) => (
  <div className={styles.OrderingInfo}>
    <ContactDetails currentUser={currentUser} />
    {/* <Delivery />
    <WaysOfPayment /> */}
  </div>
);

export default OrderingInfo;
