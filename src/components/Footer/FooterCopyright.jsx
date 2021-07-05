import React from 'react';
import styles from './Footer.module.scss';

const FooterCopyright = () => (
  <div className={styles.FooterCopyrightBefore}>
    <div className={styles.FooterCopyrightText}>
      <p>&copy; abcphoto 2020 - Все права защищены.</p>
    </div>
  </div>
);
export default FooterCopyright;