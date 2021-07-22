/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Equipment from './Equipment/Equipment';
import Matrix from './Matrix/Matrix';
import Producer from './Producer/Producer';
import Type from './Type/Type';
import styles from './ProductsFilter.module.scss';
import FilterQueryMaker from './FilterQueryMaker';
import RangeSliderContainer from './RangeSlider/RangeSliderContainer';

const VideoCamerasFilter = () => {
  console.log('PRODUCTS FILTER');

  return (
    <div className={styles.ProductsFilter}>
      <h1>VIDEO FILTER</h1>
    </div>
  );
};

export default VideoCamerasFilter;
