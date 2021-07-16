/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Categories from '../../components/Admin/Categories/Categories';
// import Login from '../../components/Admin/Login';
// import Register from '../../components/Admin/Register';
import SideNavBar from '../../components/Admin/SideNavBar/SideNavBar';
import styles from './AdminContainer.module.scss';
import Products from '../../components/Admin/Products/Products';
import CreateCategory from '../../components/Admin/CreateCategory';
import CreateProductsFormContainer from '../../components/Admin/CreateProductsForms/CreateProductsFormContainer';

const AdminContainer = () => {
  const [isActive, setIsActive] = useState('catalog');
  const handleActive = (activeBtn) => {
    setIsActive(activeBtn);
  };
  return (
    <div className={styles.AdminContainer}>
      <div className={styles.AdminWrapper}>
        <SideNavBar handleActive={handleActive} />
        <div className={styles.Content}>
          {/* {isActive === 'register' && <Register />}
          {isActive === 'login' && <Login />} */}
          {isActive === 'catalog' && <Categories />}
          {isActive === 'createCatalog' && <CreateCategory />}
          {isActive === 'create' && <CreateProductsFormContainer />}
          {isActive === 'products' && <Products />}
        </div>
      </div>
    </div>
  );
};

export default AdminContainer;
