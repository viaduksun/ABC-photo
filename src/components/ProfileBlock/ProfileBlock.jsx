import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import EditProfile from './EditProfile';
import Orders from './Orders';
import ChangePassword from './ChangePassword';
import styles from './ProfileBlock.module.scss';
import { exitAction } from '../../store/admin/actions';

const ProfileBlock = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  const [current, setCurrent] = useState('edit');
  const handleAdmin = () => {
    setCurrent('admin');
  };
  const handleEdit = () => {
    setCurrent('edit');
  };
  const handleChange = () => {
    setCurrent('change');
  };
  const handleOrders = () => {
    setCurrent('orders');
  };
  const handleExit = () => {
    dispatch(exitAction());
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  };

  const btnAdmin = classNames({
    [styles.btnProfile]: true,
    [styles.btnProfile_active]: current === 'admin',
  });
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
          {isAdmin && (
            <Link to="/admin">
              <button className={btnAdmin} type="button" onClick={handleAdmin}>
                Панель администратора
              </button>
            </Link>
          )}

          <Link to="/">
            <button
              className={styles.btnProfile}
              type="button"
              onClick={handleExit}
            >
              Выйти
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
