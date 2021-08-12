/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { IoIosPhonePortrait } from 'react-icons/io';
import classNames from 'classnames';
import styles from './PhoneDropdown.module.scss';
// import Button from '../../UI/Button/Button';

const PhoneDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    if (event.target.id === 'phoneDropdown') {
      setIsActive(!isActive);
    }
  };
  const handleCallMe = (event, value) => {
    event.preventDefault();
    console.log('CALL ME', value);
  };
  const iconClass = classNames({
    [styles.arrowIcon]: true,
    [styles.arrowIcon_active]: isActive,
  });
  const phonePopap = classNames({
    [styles.phonePopap]: true,
    [styles.phonePopap_active]: isActive,
  });
  return (
    <div className={styles.phoneWrapper}>
      <div
        className={styles.phoneButtonCap}
        onClick={(event) => handleActive(event)}
        id="phoneDropdown"
      />
      <p className={styles.phoneMainText}>044 500 50 50</p>
      <p className={styles.phoneMainTextMobile}>
        <IoIosPhonePortrait style={{ color: 'grey', fontSize: '18px' }} />
      </p>
      <BsChevronDown className={iconClass} />
      <div className={phonePopap}>
        <div className={styles.phonePopapItem}>
          <p className={styles.phoneTitle}>Сделать заказ </p>
          <p className={styles.phoneTitle}>9:00-21:00</p>
          <div className={styles.phonePopapWrapper}>
            <FiPhone className={styles.phonePopapIcon} />
            <a className={styles.popapMainText} href="tel:044 500 50 50">
              044 500 50 50
            </a>
          </div>
        </div>
        <div className={styles.phonePopapItem}>
          <p className={styles.phoneTitle}>Служба поддежки </p>
          <p className={styles.phoneTitle}>9:00-21:00</p>
          <div className={styles.phonePopapWrapper}>
            <FiPhone className={styles.phonePopapIcon} />
            <a className={styles.popapMainText} href="tel:097 500 50 50">
              097 500 50 50
            </a>
          </div>
        </div>

        {/* <form
          className={styles.phonePopapForm}
          onSubmit={(event) => handleCallMe(event)}
        >
          <p className={styles.formSeparator}>Или</p>
          <p className={styles.popapMainText}>Перезвонить мне</p>
          <label htmlFor="phone" className={styles.phoneLabel}>
            Мой номер
          </label>
          <input
            id="phone"
            type="text"
            className={styles.phoneInput}
            placeholder="+380-00-000-11-22"
          />
          <button
            type="submit"
            className={classNames('btn', { [styles.btnPhonePopap]: true })}
          >
            Перезвонить
          </button>
        </form> */}
      </div>

      {/* <ul className={styles.phDropUl}>
        <li className={styles.phDropLi}>800-500-50-54-55</li>
        <li className={styles.phDropLi}>800-500-50-54-55</li>
        <li className={styles.phDropLi}>800-500-50-54-55</li>
      </ul> */}
    </div>
  );
};

export default PhoneDropdown;
