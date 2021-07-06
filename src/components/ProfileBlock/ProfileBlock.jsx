import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import EditProfile from './EditProfile';
import Orders from './Orders';
import ChangePassword from './ChangePassword';
import styles from './ProfileBlock.module.scss';

const ProfileBlock = () => {
  const [current, setCurrent] = useState('edit');
  const handleEdit = () => {
    setCurrent('edit');
  };
  const handleChange = () => {
    setCurrent('change');
  };
  const handleOrders = () => {
    setCurrent('orders');
  };
  const btnEdit = classNames({
    [styles.btnProfile]: true,
    [styles.btnProfile_active]: current === 'edit',
  });
  const btnChange = classNames({
    [styles.btnProfile]: true,
    [styles.btnProfile_active]: current === 'change',
  });
  const btnOrders = classNames({
    [styles.btnProfile]: true,
    [styles.btnProfile_active]: current === 'orders',
  });
  return (
    <div className={styles.ProfileBlock}>
      <div className={styles.header}>Личный кабинет</div>
      <div className={styles.content}>
        <div className={styles.btnBlock}>
          <button className={btnEdit} type="button" onClick={handleEdit}>
            Редактировать профиль
          </button>
          <button className={btnChange} type="button" onClick={handleChange}>
            Изменить пароль
          </button>
          <button className={btnOrders} type="button" onClick={handleOrders}>
            Мои заказы
          </button>

          <Link to="/">
            <button className={styles.btnProfile} type="button">
              Выйти из кабинета
            </button>
          </Link>
        </div>
        <div className={styles.optionContent}>
          {current === 'edit' && <EditProfile />}
          {current === 'change' && <ChangePassword />}
          {current === 'orders' && <Orders />}
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
