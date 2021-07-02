// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './CheckoutBlock.module.scss';

// const CheckoutBlock = () => (
//   <div className={styles.CheckoutBlock}>
//     <h1>Checkout detailes</h1>
//     <div className={styles.btnBox}>
//       <Link to="/">
//         <button type="button" className="btn">
//           Подтвертить
//         </button>
//       </Link>
//     </div>
//   </div>
// );

// export default CheckoutBlock;

import React from 'react';
import styles from './CheckoutBlock.module.scss';
import OrderingInfo from './OrderingInfo/OrderingInfo';
import ProductsInCart from './ProductsInCart/ProductsInCart';

const CheckoutBlock = () => (
  <div className={styles.CheckoutBlock}>
    <div className="container">
      <h1 className={styles.CheckoutBlockTitle}>Оформление заказа</h1>
      <div className={styles.CheckoutBlockMain}>
        <OrderingInfo />
        <ProductsInCart />
      </div>
    </div>
  </div>
);

export default CheckoutBlock;
