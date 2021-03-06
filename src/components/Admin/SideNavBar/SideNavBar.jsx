/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './SideNavBar.module.scss';

const SideNavBar = ({ handleActive }) => {
  const [isActive, setIsActive] = useState('catalog');
  const handleClick = (activeBtn) => {
    setIsActive(activeBtn);
    handleActive(activeBtn);
  };
  // const registerBtn = classNames({
  //   [styles.AdminBtn]: true,
  //   [styles.AdminBtn_active]: isActive === 'register',
  // });
  // const loginBtn = classNames({
  //   [styles.AdminBtn]: true,
  //   [styles.AdminBtn_active]: isActive === 'login',
  // });
  const catalogBtn = classNames({
    [styles.AdminBtn]: true,
    [styles.AdminBtn_active]: isActive === 'catalog',
  });
  const createCatalogBtn = classNames({
    [styles.AdminBtn]: true,
    [styles.AdminBtn_active]: isActive === 'createCatalog',
  });
  const createProductBtn = classNames({
    [styles.AdminBtn]: true,
    [styles.AdminBtn_active]: isActive === 'create',
  });
  const productsBtn = classNames({
    [styles.AdminBtn]: true,
    [styles.AdminBtn_active]: isActive === 'products',
  });
  return (
    <div className={styles.SideNavBar}>
      {/* <button
        type="button"
        className={registerBtn}
        onClick={() => handleClick('register')}
      >
        Register
      </button>
      <button
        type="button"
        className={loginBtn}
        onClick={() => handleClick('login')}
      >
        Login
      </button> */}
      <button
        type="button"
        className={catalogBtn}
        onClick={() => handleClick('catalog')}
      >
        Категории
      </button>
      <button
        type="button"
        className={productsBtn}
        onClick={() => handleClick('products')}
      >
        Продукты
      </button>
      <button
        type="button"
        className={createCatalogBtn}
        onClick={() => handleClick('createCatalog')}
      >
        Создать категорию
      </button>
      <button
        type="button"
        className={createProductBtn}
        onClick={() => handleClick('create')}
      >
        Создать продукт
      </button>
    </div>
  );
};

export default SideNavBar;
