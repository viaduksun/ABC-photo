import React from 'react';
import styles from './Header.module.scss';

const handleClick = () => {
  console.log('click');
};

const Header = () => {
  return (
    <div class={styles.test}>
      <div onClick={handleClick}>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</div>
    </div>
  );
};

export default Header;
