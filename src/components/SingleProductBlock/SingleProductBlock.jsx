/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import SingleProductSlider from './SingleProductSlider/SingleProductSlider';
import SingleProductContent from './SingleProductContent/SingleProductContent';
import styles from './SingleProductBlock.module.scss';

const SingleProductBlock = ({singleProduct}) => {
  console.log('test');
  return (
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
        {Object.keys(singleProduct).length !== 0 && <SingleProductSlider singleProduct={singleProduct} />}
      </div>
      <div className={styles.ContentBlock}>
        <SingleProductContent singleProduct={singleProduct} />
      </div>
    </div>
  );
};
 
export default SingleProductBlock;
