import React from 'react';
import { Link } from 'react-router-dom';
import page404 from '../assets/img/404page/404page.png';
import Button from '../components/UI/Button/Button';
import styles from './Pages.module.scss';

const ErrorPage = () => (
  <div className={styles.ErrorPage}>
    <div className="container">
      <div>
        <img src={page404} alt="page404" />
      </div>
      <div className={styles.ErrorPageButton}>
        <Link to="/">
          <Button addClass="cart_green">на главную</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default ErrorPage;
