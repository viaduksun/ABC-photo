import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const FooterInformation = ({title, links, id}) => (
  <div className={styles.FooterInformation}>
    <input type="checkbox" id={id} className={styles.FooterInformationInput} />
    <label htmlFor={id} className={styles.FooterInformationInputLabel}>{title}</label>
    <div className={styles.FooterInformationLinkWrapper}>
      {links.map((link) => (
        <a key={link.text} href={link.to} className={styles.FooterInformationText}>
          {link.text}
        </a>
      // <FooterLinkItem key={link.text} to={link.to} onClick={() => window.scrollTo(0, 0)}>
      //   {link.text}
      // </FooterLinkItem>
    ))}
    </div>
  </div>
);
FooterInformation.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
export default FooterInformation;