import React from 'react';
import CreateCategoryForm from './CreateCategoryForm';
import styles from './CreateCategory.module.scss';

const CreateCategory = () => (
  <div className={styles.formWrapper}>
    <CreateCategoryForm />
  </div>
);

export default CreateCategory;
