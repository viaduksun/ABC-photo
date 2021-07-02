/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const [isUA, setIsUA] = useState(true);
  const [isRU, setIsRU] = useState(false);
  const [isEN, setIsEN] = useState(false);
  const handleUA = () => {
    setIsUA(true);
    setIsRU(false);
    setIsEN(false);
  };
  const handleRU = () => {
    setIsUA(false);
    setIsRU(true);
    setIsEN(false);
  };
  const handleEN = () => {
    setIsUA(false);
    setIsRU(false);
    setIsEN(true);
  };
  const stylesUA = classNames({
    [styles.LanguageSelectorItem]: true,
    [styles.LanguageSelectorItem_active]: isUA,
  });
  const stylesRU = classNames({
    [styles.LanguageSelectorItem]: true,
    [styles.LanguageSelectorItem_active]: isRU,
  });
  const stylesEN = classNames({
    [styles.LanguageSelectorItem]: true,
    [styles.LanguageSelectorItem_active]: isEN,
  });
  return (
    <ul className={styles.LanguageSelector}>
      <li className={stylesUA} onClick={handleUA}>
        UA
      </li>
      <li className={stylesRU} onClick={handleRU}>
        RU
      </li>
      <li className={stylesEN} onClick={handleEN}>
        EN
      </li>
    </ul>
  );
};

export default LanguageSelector;
