import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pages.module.scss';

const ErrorPage = () => (
  <div className={styles.ErrorPage}>
    <h2>Oooops!</h2>
    <p>Возможно, вы зашли на несуществующую страницу нашего сайта!</p>

    <Link to="/">
      <p className={styles.LinkHome}>Нажмите, что бы перейти домой</p>
    </Link>
  </div>
);

export default ErrorPage;
