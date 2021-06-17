import React from 'react';
import styles from './Header.module.scss';

const handleClick = () => {
  console.log('click');
};

const Header = () => {
  return (
    <div className={styles.test}>
      <div onClick={handleClick}>test</div>
    </div>
  );
};

export default Header;
