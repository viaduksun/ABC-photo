/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// import { useSelector } from 'react-redux';
import SingleProductSlider from './SingleProductSlider/SingleProductSlider';
import SingleProductContent from './SingleProductContent/SingleProductContent';
import styles from './SingleProductBlock.module.scss';

const SingleProductBlock = ({ singleProduct }) => (
  <div className={styles.Wrapper}>
    <div className={styles.SliderBlock}>
      <div className={styles.SliderBlockText}>
        <h2>{singleProduct.characteristics.model[1]}</h2>
        <p>Код товара {singleProduct.characteristics.artical[1]}</p>
      </div>
      <SingleProductSlider singleProduct={singleProduct} />
    </div>
    <div className={styles.ContentBlock}>
      <SingleProductContent singleProduct={singleProduct} />
    </div>
  </div>
);

export default SingleProductBlock;
