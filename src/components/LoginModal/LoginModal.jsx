/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc';
import { loginModalCloseAction } from '../../store/madals/actions';
import styles from './LoginModal.module.scss';

const LoginModal = () => {
  const dispatch = useDispatch();
  console.log('Login modal');
  const handleModalClose = (e) => {
    if (
      e.target.classList.contains('LoginModal_Cover__2BF39') ||
      e.target.classList.contains('LoginModal_closeIcon__mj_VN')
    ) {
      console.log(e.target);
      dispatch(loginModalCloseAction());
    }
  };
  return (
    <div
      className={styles.Cover}
      onClick={(e) => {
        handleModalClose(e);
      }}
    >
      <div className={styles.LoginModal}>
        <VscChromeClose
          className={styles.closeIcon}
          onClick={handleModalClose}
        />
        <div className={styles.Header}>
          <div className={styles.headerMenuItem}>Войти</div>
          <div className={styles.headerMenuItem}>Зарегистрироваться</div>
        </div>
        <div className={styles.Body}>Body</div>
        <div className={styles.Footer}>Footer</div>
      </div>
    </div>
  );
};

export default LoginModal;
