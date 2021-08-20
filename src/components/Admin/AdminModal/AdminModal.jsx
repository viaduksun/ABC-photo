/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { BsX } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './AdminModal.module.scss';
import { editProductModalClose } from '../../store/madals/actions';

const Modal = ({ title, body, btnBlock, onCloseClick, addClass }) => {
  const dispatch = useDispatch();
  const handleCloseCover = (e) => {
    if (e.target.classList.contains(styles.ModalCover)) {
      dispatch(editProductModalClose());
      onCloseClick();
    }
  };
  const handleCloseX = () => {
    dispatch(editProductModalClose());
    onCloseClick();
  };
  const modalClass = classNames({
    [styles.Modal]: true,
    [addClass]: addClass,
  });
  return (
    <div className={styles.ModalCover} onClick={handleCloseCover}>
      <div className={modalClass}>
        <div className={styles.ModalCloseX} onClick={handleCloseX}>
          <BsX />
        </div>
        <div className={styles.ModalHeader}>{title}</div>
        <div className={styles.ModalBody}>{body}</div>
        <div className={styles.ModalFooter}>{btnBlock}</div>
      </div>
    </div>
  );
};

export default Modal;
