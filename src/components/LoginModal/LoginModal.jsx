/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc';
import classNames from 'classnames';
import { FaTwitter, FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { loginModalCloseAction } from '../../store/madals/actions';
import styles from './LoginModal.module.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
// === THIS COMPONENT RENDERED IN : components\Header\MiddleMenu\MiddleMenu.jsx
const LoginModal = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState('enter');
  console.log('Login modal');
  const handleModalClose = () => {
    dispatch(loginModalCloseAction());
  };
  const handleMenuClick = (activeItem) => {
    setIsActive(activeItem);
  };
  const headerMenuEnter = classNames({
    [styles.headerMenuItem]: true,
    [styles.headerMenuItem_enter]: true,
    [styles.headerMenuItem_active]: isActive === 'enter',
  });
  const headerMenuRegister = classNames({
    [styles.headerMenuItem]: true,
    [styles.headerMenuItem_active]: isActive === 'register',
  });
  return (
    <div
      className={styles.Cover}
      onClick={() => {
        handleModalClose();
      }}
    >
      <div className={styles.LoginModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeIconWrapper} onClick={handleModalClose}>
          <VscChromeClose className={styles.closeIcon} />
        </div>

        <div className={styles.Header}>
          <div
            className={headerMenuEnter}
            onClick={() => {
              handleMenuClick('enter');
            }}
          >
            Войти
          </div>
          <div
            className={headerMenuRegister}
            onClick={() => {
              handleMenuClick('register');
            }}
          >
            Зарегистрироваться
          </div>
        </div>
        <div className={styles.Body}>
          {isActive === 'enter' && <LoginForm />}
          {isActive === 'register' && <RegisterForm />}
        </div>
        <div className={styles.Footer}>
          <div className={styles.socials}>
            <div
              className={classNames({
                [styles.iconItem]: true,
                [styles.iconItem_tw]: true,
              })}
            >
              <div className={styles.iconCircle}>
                <FaTwitter className={styles.twitter} />
              </div>
            </div>
            <div
              className={classNames({
                [styles.iconItem]: true,
                [styles.iconItem_fb]: true,
              })}
            >
              <div className={styles.iconCircle}>
                <FaFacebookF className={styles.fb} />
              </div>
            </div>
            <div
              className={classNames({
                [styles.iconItem]: true,
                [styles.iconItem_go]: true,
              })}
            >
              <div className={styles.iconCircle}>
                <FaGooglePlusG className={styles.google} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
