/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { BsX } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import { editProductModalClose } from '../../store/madals/actions';

const Modal = ({ title, body, btnBlock }) => {
  const dispatch = useDispatch();
  console.log('Modal');
  const handleCloseCover = (e) => {
    if (e.target.classList.contains(styles.ModalCover)) {
      console.log('Close');
      dispatch(editProductModalClose());
    }
  };
  const handleCloseX = () => {
    dispatch(editProductModalClose());
  };
  return (
    <div className={styles.ModalCover} onClick={handleCloseCover}>
      <div className={styles.Modal}>
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
