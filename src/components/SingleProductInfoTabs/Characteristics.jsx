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
  const singleProduct = useSelector(
    (state) => state.singleProduct.singleProduct
  );

  const characteristics = Object.keys(singleProduct.characteristics).map(
    (key) => (
      <li className={styles.CharacteristicsWrapperItem}>
        <p>{singleProduct.characteristics[key][0]}</p>
        <p>{singleProduct.characteristics[key][1]}</p>
      </li>
    )
  );
  // console.log('CHARACT', characteristics);
  return <ul className={styles.CharacteristicsWrapper}>{characteristics}</ul>;
};

Characteristics.propTypes = {
  singleProduct: PropTypes.objectOf(PropTypes.any),
};
Characteristics.defaultProps = {
  singleProduct: {},
};

export default Characteristics;
