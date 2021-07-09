/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Categories from '../../components/Admin/Categories';
import Login from '../../components/Admin/Login';
import Products from '../../components/Admin/Products';
import Register from '../../components/Admin/Register';
import SideNavBar from '../../components/Admin/SideNavBar/SideNavBar';
import styles from './AdminContainer.module.scss';

const AdminContainer = () => {
  const [isActive, setIsActive] = useState('register');
  const handleActive = (activeBtn) => {
    setIsActive(activeBtn);
  };
  return (
    <div className={styles.AdminContainer}>
      <h1 className={styles.Title}>Administrative panel</h1>
      <div className={styles.AdminWrapper}>
        <SideNavBar handleActive={handleActive} />
        <div className={styles.Content}>
          {isActive === 'register' && <Register />}
          {isActive === 'login' && <Login />}
          {isActive === 'catalog' && <Categories />}
          {isActive === 'products' && <Products />}
        </div>
      </div>
    </div>
  );
};

export default AdminContainer;
