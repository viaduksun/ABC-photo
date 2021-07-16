/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import SelectCategoryForm from './CategorySelectForm';
import CreatePhotoCameraProductForm from './CreatePhotoCameraProductForm';
import styles from './CreateProductsForms.module.scss';

const CreateProductsFormContainer = () => {
  return (
    <div className={styles.createWrapper}>
      <h1>Создать продукт</h1>
      <SelectCategoryForm />
      <CreatePhotoCameraProductForm />
    </div>
  );
};

export default CreateProductsFormContainer;
