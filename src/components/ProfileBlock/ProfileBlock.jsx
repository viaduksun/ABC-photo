import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileBlock.module.scss';

const ProfileBlock = () => (
  <div className={styles.ProfileBlock}>
    <h1>My profile block</h1>
    <div className={styles.btnBox}>
      <Link to="/">
        <button type="button" className="btn">
          Готово
        </button>
      </Link>
    </div>
  </div>
);

export default ProfileBlock;
