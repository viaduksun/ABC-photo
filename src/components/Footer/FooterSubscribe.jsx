import React from 'react';
import {FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoIosArrowForward} from 'react-icons/io';
import styles from './Footer.module.scss';

// const FooterSubscribe = ({createNewSubscribe}) => {
const FooterSubscribe = () => (
  <div className={styles.footerSubscribe}>
    <div className={styles.footerSubscribeTitle}>
      <h6>Подписаться на рассылку</h6>
    </div>
    <form className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="E-mail"
      />
      <button className={styles.button} type="submit">
        <IoIosArrowForward className={styles.selectIcon} />
      </button>
    </form>
    <div className={styles.icons}>
      <p>Мы в социальных сетях</p>
      <div className={styles.footerSubscribeIcon}>
        <a href="https://www.instagram.com/" target="blank" aria-label="Link" className={styles.contactsLink}><FaInstagramSquare size="2em" /></a>
        <a href="https://www.facebook.com/" target="blank" aria-label="Link" className={styles.contactsLink}><FaFacebookSquare size="2em" /></a>
      </div>
    
    </div>
  </div>
);

export default FooterSubscribe;