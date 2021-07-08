import React, { useState } from 'react';
import MainImg from '../../../assets/img/cartBlock/cartImg.png';
import styles from './ProductsInCart.module.scss';
import Button from '../../UI/Button/Button';
import FinalModal from '../../FinalModal/FinalModal';

const ProductsInCart = () => {
  const [modalActive, setModalActive] = useState(false);
  const openModal = () => {
    setModalActive(true);
  };
  return (
    <div className={styles.ProductsInCart}>
      <div className={styles.Header}>
        <h2>Товары в корзине</h2>
      </div>
      <div className={styles.Main}>
        <div className={styles.MainImgAndName}>
          <div className={styles.MainImg}>
            <img src={MainImg} alt={MainImg} />
          </div>
          <p className={styles.MainName}>
            Canon EOS 6D (Wi-Fi) Body
            <br />
            <span>Код товара: 012212</span>
          </p>
        </div>

        <p className={styles.MainPrice}>9137 грн</p>
      </div>
      <div className={styles.Footer}>
        <p className={styles.FooterDeliveryPrice}>Доставка - 150 грн</p>
        <p className={styles.FooterTotalSum}>
          Сумма заказа: 16 619
          <span> грн</span>
        </p>
        <Button type="ordering_confirm" onClick={openModal}>
          Подтвердить
        </Button>
      </div>
      <FinalModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default ProductsInCart;
