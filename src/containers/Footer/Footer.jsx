import React from 'react';
import styles from './Footer.module.scss';

import FooterContacts from '../../components/Footer/FooterContacts';
import FooterInformation from '../../components/Footer/FooterInformation';
import FooterSubscribe from '../../components/Footer/FooterSubscribe';
import FooterCopyright from '../../components/Footer/FooterCopyright';
import footerConfig from '../../components/Footer/footerConfig';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.FooterGrid}>
      <FooterContacts />
      {footerConfig.map((links) => (
        <FooterInformation key={links.id} title={links.title} links={links.links} id={links.id} />
      ))}
      <FooterSubscribe />
    </div>
    <div className={styles.FooterCopyrightBefore}>
      <FooterCopyright />
    </div>
    
  </div>
);

export default Footer;
