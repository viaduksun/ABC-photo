/* eslint-disable operator-linebreak */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './SingleProductInfoTabs.module.scss';

const Characteristics = () => {
  const singleProd = useSelector((state) => state.singleProduct.singleProduct);

  console.log('singleProduct2', singleProd);
  // const characteristics = [];
  // const characteristicsArr = () => {
  //   for (const key in singleProd) {
  //     if (
  //       key !== 'category' &&
  //       key !== 'date' &&
  //       key !== 'description' &&
  //       key !== 'enabled' &&
  //       key !== 'imageUrls' &&
  //       key !== 'itemNo' &&
  //       key !== 'enabled' &&
  //       key !== 'previousPrice' &&
  //       key !== 'quantity' &&
  //       key !== 'waranty' &&
  //       key !== 'hit' &&
  //       key !== '_id'
  //     ) {
  //       const characterItem = (
  //         <li className={styles.CharacteristicsWrapperItem}>
  //           <p>{key}</p>
  //           <p>{singleProd[key][0]}</p>
  //           <p>{singleProd[key][1]}</p>
  //         </li>
  //       );
  //       characteristics.push(characterItem);
  //       console.log(characterItem);
  //       // console.log(key, ':', singleProd[key]);
  //     }
  //     return characteristics;
  //   }
  //   return characteristics;
  // };
  const characteristics = Object.keys(singleProd).map((key) => (
    <li className={styles.CharacteristicsWrapperItem}>
      <p>{singleProd[key][0]}</p>
      <p>{singleProd[key][1]}</p>
    </li>
  ));
  console.log('CHARACT', characteristics);
  return (
    <ul className={styles.CharacteristicsWrapper}>
      {characteristics}
      {/* <li className={styles.CharacteristicsWrapperItem}>
        <p>Гарантия</p>
        <p>{singleProduct.waranty}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Цифровое увеличение</p>
        <p>{singleProduct.digitalMagnification}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Фокусное расстояние</p>
        <p>{singleProduct.focusDistance}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Размер матрицы</p>
        <p>{singleProduct.matrixSize}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Тип матрицы</p>
        <p>{singleProduct.matrixType}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Кол-во эффективных мегапикселей</p>
        <p>{singleProduct.megapixels}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Оптическое увеличение</p>
        <p>{singleProduct.opticalMagnification}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Диагональ экрана</p>
        <p>{singleProduct.screenDiagonal}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Сенсорный экран</p>
        <p>{singleProduct.sensorScreen}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Набор</p>
        <p>{singleProduct.set}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Стабилизация</p>
        <p>{singleProduct.stabilization}</p>
      </li>
      <li className={styles.CharacteristicsWrapperItem}>
        <p>Тип</p>
        <p>{singleProduct.type}</p>
      </li> */}
    </ul>
  );
};

Characteristics.propTypes = {
  singleProduct: PropTypes.objectOf(PropTypes.any),
};
Characteristics.defaultProps = {
  singleProduct: {},
};

export default Characteristics;
