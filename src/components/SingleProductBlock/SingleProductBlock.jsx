/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import SingleProductSlider from './SingleProductSlider/SingleProductSlider';
import SingleProductContent from './SingleProductContent/SingleProductContent';
import styles from './SingleProductBlock.module.scss';

const SingleProductBlock = ({singleProduct}) => (
  <div className={styles.Wrapper}>
    <div className={styles.SliderBlock}>
      <div className={styles.SliderBlockText}>
        <h2>{singleProduct.name}</h2>
        <p>
          Код товара
          {' '}
          {singleProduct.artical}
        </p>
      </div>
      
      <SingleProductSlider singleProduct={singleProduct} />
    </div>
    <div className={styles.ContentBlock}>
      <SingleProductContent singleProduct={singleProduct} />
    </div>
  </div>
);
export default SingleProductBlock;
