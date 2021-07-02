<<<<<<< HEAD
import React from 'react';
import styles from './SingleProductInfoTabs.module.scss';

const SingleProductInfoTabs = () => (
  <div className="container">
    <div className={styles.SingleProductInfoTabs}>
      <h1>Single Product Tabs</h1>
    </div>
  </div>
);

export default SingleProductInfoTabs;
=======
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './SingleProductInfoTabs.module.scss';
import Desctiption from './Desctiption';
import Characteristics from './Characteristics';
import Accessories from './Accessories';
import AccordeonTabs from './AccordeonTabs';

const SingleProductInfoTabs = () => {
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
    <div className="container">
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
          {currentTab === 'description' && <Desctiption />}
          {currentTab === 'characteristics' && <Characteristics />}
          {currentTab === 'accessories' && <Accessories />}
        </div>
      </div>
    </div>
  );
};

export default SingleProductInfoTabs;
>>>>>>> 13a0f2082cf78291554fe38ce2f5800dc1188d22
