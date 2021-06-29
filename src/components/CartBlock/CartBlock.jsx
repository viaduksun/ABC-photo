import React from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import styles from './CartBlock.module.scss';
import cartImg from '../../assets/img/cartBlock/cartImg.png';

const CartBlock = () => (
  <div className={styles.CartBlock}>
    <h2 className={styles.Title}>Моя корзина</h2>
    <div className={styles.Cart}>
      <ul className={styles.CartHeader}>
        <li>Товар</li>
        <li>Цена</li>
        <li>Количество</li>
        <li>Всего</li>
      </ul>
      <ul className={styles.CartMain}>
        <li className={styles.CartMainItem}>
          <div className={styles.CartMainItemProduct}>
            <div className={styles.CartMainItemProductImg}>
              <img src={cartImg} alt={cartImg} />
            </div>
            <div className={styles.CartMainItemProductContent}>
              <div className={styles.CartMainItemProductTitle}>
                Canon EOS 6D
                (Wi-Fi) Body
              </div>
              <div className={styles.CartMainItemProductCode}>
                Код товара: 012212
              </div>
            </div>
          </div>
          <div className={styles.CartMainItemPrice}>9137 грн</div>
          <div className={styles.CartMainItemAmount}>
            <div className={styles.CartMainItemAmountMinus}>-</div>
            <div className={styles.CartMainItemAmountNumbers}>1</div>
            <div className={styles.CartMainItemAmountPlus}>+</div>
          </div>
          <div className={styles.CartMainItemTotal}>9137 грн</div>
          <div className={styles.CartMainItemBtnClose}><MdClose /></div>
        </li>
      </ul>
      <div className={styles.CartFooter}>
        <div className={styles.CartFooterLeft}>
          <Link to="/products">
            <button type="button">Продолжить покупки</button>
          </Link>
           
        </div>
        <div className={styles.CartFooterRight}>
          <div className={styles.CartFooterRightText}>
            Итого:
            <span> 4 товара </span>
            на общую сумму
          </div>
          <div className={styles.CartFooterRightPrice}>
            16 619
            <span> грн</span>
          </div>
          <Link to="/checkout">
            <button type="button">Оформить</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );

export default CartBlock;
