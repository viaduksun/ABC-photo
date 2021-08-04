/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsX } from 'react-icons/bs';
import styles from './FinalModal.module.scss';

// eslint-disable-next-line react/prop-types
const FinalModal = ({ active, setActive, orderNo }) => {
  const handleClose = () => {
    setActive(false);
  };
  return (
    <div
      className={active ? styles.Modal_active : styles.Modal}
      onClick={handleClose}
    >
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.ModalClose}
          onClick={handleClose}
        >
          <BsX />
        </button>
        <div className={styles.ModalSvg}>
          <svg
            width="121"
            height="121"
            viewBox="0 0 121 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.5 0C27.1409 0 0 27.1409 0 60.5C0 93.8591 27.1409 121 60.5 121C93.8591 121 121 93.8591 121 60.5C121 27.1409 93.8591 0 60.5 0ZM60.5 115.958C29.9201 115.958 5.04159 91.0799 5.04159 60.5C5.04159 29.9201 29.9201 5.04159 60.5 5.04159C91.0799 5.04159 115.958 29.9201 115.958 60.5C115.958 91.0799 91.0799 115.958 60.5 115.958Z"
              fill="#51AD33"
            />
            <path
              d="M92.9681 70.6894C91.6019 70.3621 90.2527 71.2039 89.9327 72.5578C86.6832 86.2377 74.5813 95.7919 60.4999 95.7919C46.4015 95.7919 34.2947 86.223 31.0598 72.5259C30.7372 71.167 29.371 70.3422 28.027 70.6499C26.6705 70.9699 25.831 72.3288 26.151 73.6827C29.9273 89.6694 44.0529 100.833 60.4999 100.833C76.9271 100.833 91.0477 89.6864 94.8365 73.7246C95.1591 72.3683 94.3222 71.0094 92.9681 70.6894Z"
              fill="#51AD33"
            />
            <path
              d="M40.3336 50.4166C43.118 50.4166 45.3752 48.1594 45.3752 45.375C45.3752 42.5906 43.118 40.3335 40.3336 40.3335C37.5492 40.3335 35.292 42.5906 35.292 45.375C35.292 48.1594 37.5492 50.4166 40.3336 50.4166Z"
              fill="#51AD33"
            />
            <path
              d="M80.6666 50.4166C83.451 50.4166 85.7082 48.1594 85.7082 45.375C85.7082 42.5906 83.451 40.3335 80.6666 40.3335C77.8822 40.3335 75.625 42.5906 75.625 45.375C75.625 48.1594 77.8822 50.4166 80.6666 50.4166Z"
              fill="#51AD33"
            />
          </svg>
        </div>
        <h2>Спасибо, что выбрали нас!</h2>
        <div>
          <p>
            Ваш заказ № {orderNo} успешно оформлен. Мы свяжемся с вами ближайшее
            время.
          </p>
        </div>
        <Link to="/">
          <button type="button" className={styles.Button}>
            Продолжить покупки
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FinalModal;
