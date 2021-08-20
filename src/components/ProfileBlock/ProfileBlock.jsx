/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { MdViewHeadline, MdClose } from 'react-icons/md';
import EditProfile from './EditProfile';
import Orders from './Orders';
import ChangePassword from './ChangePassword';
import styles from './ProfileBlock.module.scss';
import { exitAction } from '../../store/admin/actions';
import { deleteAllDataFromCartAction } from '../../store/cart/actions';
import getCustomer from '../../api/getOneCustomer';

const ProfileBlock = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  const [current, setCurrent] = useState('edit');
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  useEffect(() => {
    console.log('USE EFFECT');
    getCustomer();
  }, []);

  const handleAdmin = () => {
    setCurrent('admin');
    setActiveMobileMenu(!activeMobileMenu);
  };
  const handleEdit = () => {
    setCurrent('edit');
    setActiveMobileMenu(!activeMobileMenu);
  };
  const handleChange = () => {
    setCurrent('change');
    setActiveMobileMenu(!activeMobileMenu);
  };
  const handleOrders = () => {
    setCurrent('orders');
    setActiveMobileMenu(!activeMobileMenu);
  };
  const handleExit = () => {
    dispatch(exitAction());
    dispatch(deleteAllDataFromCartAction());
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
  const openMenu = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };
  return (
    <div className={styles.ProfileBlock}>
      <div className={styles.header}>Личный кабинет</div>
      <div className={styles.openMobileMenu} onClick={openMenu}>
        <MdViewHeadline
          className={
            activeMobileMenu ? styles.openIconMenu : styles.openIconMenu_active
          }
        />
        <MdClose
          className={
            activeMobileMenu ? styles.openIconMenu_active : styles.openIconMenu
          }
        />
      </div>
      <div className={styles.content}>
        <div
          className={
            activeMobileMenu ? styles.btnBlock_active : styles.btnBlock
          }
        >
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

export default React.memo(ProfileBlock);
