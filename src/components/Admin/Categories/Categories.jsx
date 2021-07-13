import React from 'react';
import CreateCategoryForm from '../CreateCategoryForm';
import styles from './Categories.module.scss';

const Categories = () => (
  <div className={styles.CategoriesWrapper}>
    <CreateCategoryForm />
  </div>
);

export default Categories;
