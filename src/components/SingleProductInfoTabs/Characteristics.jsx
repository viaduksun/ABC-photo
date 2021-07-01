import React from 'react';
import characteristics from '../../Data/characteristics';
import styles from './SingleProductInfoTabs.module.scss';

const Characteristics = () => {
  console.log(Object.keys(characteristics));
  const abjArr = Object.entries(characteristics);
  console.log(abjArr);
  abjArr.forEach(([key, value]) => {
    console.table(key, value);
  });
  return (
    <div className={styles.CharacteristicsWrapper}>
      
      {abjArr.map((item) => (
        <div className={styles.charactItem}>
          <p key={item[0]} className={styles.charactItemTitle}>
            {item[0]}
          </p>
          <p key={item[1]}>{item[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Characteristics;
