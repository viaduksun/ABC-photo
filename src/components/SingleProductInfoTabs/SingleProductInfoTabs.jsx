/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SingleProductInfoTabs.module.scss';
import Desctiption from './Desctiption';
import Characteristics from './Characteristics';
import Accessories from './Accessories';
import AccordeonTabs from './AccordeonTabs';

const SingleProductInfoTabs = ({singleProduct}) => {
  const [currentTab, setCurrentTab] = useState('description');
  const descriptionToggle = () => {
    setCurrentTab('description');
  };
  const characteristicsToggle = () => {
    setCurrentTab('characteristics');
  };
  const accessoriesToggle = () => {
    setCurrentTab('accessories');
  };
  const descriptionClass = classNames({
    [styles.tabBtn]: true,
    [styles.tabBtn_active]: currentTab === 'description',
  });
  const characteristicsClass = classNames({
    [styles.tabBtn]: true,
    [styles.tabBtn_active]: currentTab === 'characteristics',
  });
  const accessoriesClass = classNames({
    [styles.tabBtn]: true,
    [styles.tabBtn_active]: currentTab === 'accessories',
  });
  return (
    <div className={styles.SingleProductInfoTabs}>
      <div className={styles.header}>
        <p className={descriptionClass} onClick={descriptionToggle}>
          описание
        </p>
        <p className={characteristicsClass} onClick={characteristicsToggle}>
          характеристики
        </p>
        <p className={accessoriesClass} onClick={accessoriesToggle}>
          аксессуары
        </p>
      </div>
      <div className={styles.headerAccordion}>
        <AccordeonTabs />
      </div>
      <div className={styles.tabContentBox}>
        {currentTab === 'description' && <Desctiption singleProduct={singleProduct} />}
        {currentTab === 'characteristics' && <Characteristics singleProduct={singleProduct} />}
        {currentTab === 'accessories' && <Accessories singleProduct={singleProduct} />}
      </div>
    </div>
  );
};

SingleProductInfoTabs.propTypes = {
  singleProduct: PropTypes.objectOf.isRequired
};

export default SingleProductInfoTabs;
