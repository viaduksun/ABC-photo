/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SelectCategoryForm from './CategorySelectForm';
import CreatePhotoCameraProductForm from './CreatePhotoCameraProductForm';
import CreateVideoCameraProductForm from './CreateVideoCameraProductForm';
import CreateActionCameraProductForm from './CreateActionCameraProductForm';
import CreateLensesProductForm from './CreateLensesProductForm';
import CreateMicroForm from './CreateMicroForm';
import styles from './CreateProductsForms.module.scss';

const CreateProductsFormContainer = () => {
  const catalog = useSelector((state) => state.admin.catalog);
  const [currentCategory, setCurrentCategory] = useState(null);
  const handleSelect = (values) => {
    const targetCategory = catalog.find(
      (category) => category._id === values.categoryId
    );
    setCurrentCategory(targetCategory);
    console.log(targetCategory);
  };
  return (
    <div className={styles.createWrapper}>
      <SelectCategoryForm handleSelect={handleSelect} />
      {currentCategory === null && (
        <div className={styles.FormBody}>
          <h1 className={styles.FormBodyTitle}>Категория не выбрана</h1>
        </div>
      )}
      {currentCategory && currentCategory.id === 'photocameras' && (
        <CreatePhotoCameraProductForm currentCategory={currentCategory} />
      )}
      {currentCategory && currentCategory.id === 'videocameras' && (
        <CreateVideoCameraProductForm currentCategory={currentCategory} />
      )}
      {currentCategory && currentCategory.id === 'actioncameras' && (
        <CreateActionCameraProductForm currentCategory={currentCategory} />
      )}
      {currentCategory && currentCategory.id === 'lenses' && (
        <CreateLensesProductForm currentCategory={currentCategory} />
      )}
      {currentCategory && currentCategory.id === 'micro' && (
        <CreateMicroForm currentCategory={currentCategory} />
      )}
    </div>
  );
};

export default CreateProductsFormContainer;
