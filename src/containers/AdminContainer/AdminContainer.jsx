/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Categories from '../../components/Admin/Categories';
import Login from '../../components/Admin/Login';
import Register from '../../components/Admin/Register';
import SideNavBar from '../../components/Admin/SideNavBar/SideNavBar';
import styles from './AdminContainer.module.scss';
import CreateProducts from '../../components/Admin/CreateProducts';
import Products from '../../components/Admin/Products/Products';

const AdminContainer = () => {
  const [isActive, setIsActive] = useState('register');
  const handleActive = (activeBtn) => {
    setIsActive(activeBtn);
  };
  return (
    <div className={styles.AdminContainer}>
      <div className={styles.AdminWrapper}>
        <SideNavBar handleActive={handleActive} />
        <div className={styles.Content}>
          {isActive === 'register' && <Register />}
          {isActive === 'login' && <Login />}
          {isActive === 'catalog' && <Categories />}
          {isActive === 'create' && <CreateProducts />}
          {isActive === 'products' && <Products />}
        </div>
      </div>
    </div>
  );
};

export default AdminContainer;
