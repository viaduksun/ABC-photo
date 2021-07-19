/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addSingleProductToCartAction } from '../../../store/cart/actions';

import Button from '../../UI/Button/Button';
import styles from './SingleProductContent.module.scss';

const SingleProductContent = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const singleProduct1 = useSelector(
    (state) => state.singleProduct.singleProduct
  );
  useEffect(() => {
    if (singleProduct1) {
      setSingleProduct(singleProduct1);
      setIsLoading(false);
    }
  }, [singleProduct1]);

  const dispatch = useDispatch();
  // const [q, currentPrice] = singleProduct.currentPrice;
  console.log('singleProduct', singleProduct);

  const addProductToCartHandler = () => {
    console.log('click');
    dispatch(addSingleProductToCartAction(singleProduct));
  };

  return (
    <div className={styles.Wrapper}>
      <p className={styles.InStock}>
        {singleProduct.quantity !== 0 && <span>в наличии</span>}
      </p>
      {!isLoading && (
        <p className={styles.Price}>{singleProduct.currentPrice} грн</p>
      )}

      <div className={styles.ButtonBuy}>
        <Button addClass="cart_green" onClick={addProductToCartHandler}>
          <span>Купить</span>
          <FiShoppingCart />
        </Button>
      </div>
      <p className={styles.Delivery}>Доставка</p>
      <ul className={styles.DeliveryList}>
        <li>• Доставка по всей Украине</li>
        <li>• Оплата товара при получении</li>
        <li>• Возможен самовывоз</li>
      </ul>
    </div>
  );
};

export default SingleProductContent;
