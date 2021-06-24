import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SingleProductBlock.module.scss';

const SingleProductBlock = () => (
  <div className="container">
    <div className={styles.SingleProductBlock}>
      <h1>Single Product Block</h1>
      <div className={styles.btnBlock}>
        <Link to="/cart">
          <button type="button" className="btn">
            Купить
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default SingleProductBlock;
