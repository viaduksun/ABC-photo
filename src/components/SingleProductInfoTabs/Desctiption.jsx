/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleProductInfoTabs.module.scss';

const Desctiption = ({ singleProduct }) => (
  <div className={styles.descriptionWrapper}>
    <div className={styles.textBlock}>
      <div className={styles.descriptionBody}>{singleProduct.description}</div>
    </div>
  </div>
);

Desctiption.propTypes = {
  singleProduct: PropTypes.objectOf,
};
Desctiption.defaultProps = {
  singleProduct: {},
};

export default Desctiption;
