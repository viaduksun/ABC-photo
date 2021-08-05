/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Products.module.scss';

const Characteristics = ({ charObj }) => {
  console.log(charObj);
  const characteristics = Object.keys(charObj).map((key) => (
    <div className={styles.dataItem}>
      <div className={styles.dataTitle}>{charObj[key][0]}</div>
      <div className={styles.dataContent}>{charObj[key][1]}</div>
    </div>
  ));

  return <>{characteristics}</>;
};

export default Characteristics;
