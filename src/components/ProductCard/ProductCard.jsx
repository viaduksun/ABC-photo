import React from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import styles from './ProductCard.module.scss';
import products from './products';

const ProductCard = () => (
  <Link to="/single-product">
    {/* {products.map(() => ( */}
    <div className={styles.ProductCard}>
      <img
        className={styles.ProductImg}
        src="https://files.foxtrot.com.ua/PhotoNew/img_0_117_3135_0_Small.webp"
        alt=""
      />
      <h2 className={styles.ProductName}>
        NIKON Z 7 + 24-70 f4 + FTZ Adapter Kit
        {products.name}
      </h2>
      <div className={styles.ProductBlock}>
        <div className={styles.ProductData}>
          <span className={styles.ProductPrice}>
            103 615 ГРН
            {products.price}
          </span>
          <span className={styles.ProductStatus}>
            в наличии
            {products.status}
          </span>
        </div>
        <div>
          <span>
            <BiCart className={styles.ProductIcon} />
          </span>
        </div>
      </div>
      <div className={styles.ProductInfo}>
        Матрица 22.3 x 14.9 мм, 24.2 Мп поддержка карт памяти
        SD/SDHC/SDXCСенсорный ЖК-дисплей с переменным углом наклона Clear View
        II TFT 3&#34; / FullHD-видео / питание от литий-ионного аккумулятора /
        131 x 76.2 x 99.9 мм, 532 г
      </div>
    </div>
    {/* ))} */}
  </Link>
);

export default ProductCard;
