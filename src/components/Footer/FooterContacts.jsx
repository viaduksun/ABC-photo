import React from 'react';
import styles from './Footer.module.scss';
import logo from './footerImage/footerLogo.png';

const FooterContacts = () => (
  <div className={styles.contacts}>
    <div className={styles.contactsImage}>
      <img src={logo} alt="#" />
    </div>
    <p className={styles.contactsText}>Интернет магазин</p>
    <div className={styles.contactsTel}>
      <a href="tel:0800212150" className={styles.contactsLink}>0 800 21 21 50</a>
    </div>
    <div className={styles.contactsMail}>
      <a href="mailto:info@abcfoto.com.ua" className={styles.contactsLink}>info@abcfoto.com.ua</a>
    </div>
    
  </div>
);
export default FooterContacts;