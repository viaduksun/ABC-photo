/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './Categories.module.scss';

const ChildrenCategory = ({
  category,
  index,
  setActiveEditCategory,
  setActiveDeleteCategory,
}) => (
  <div className={styles.ChildCategoryCard}>
    <div className={styles.number}>{index + 1}</div>
    <div className={styles.preview}>
      <img src={category.imgUrl} alt={category.name} />
    </div>
    <div className={styles.ChildCategoryTitle}>{category.name}</div>
    <div className={styles.btnblock}>
      <Button
        onClick={() => {
          setActiveEditCategory(category);
        }}
        addClass="admin-edit"
      >
        Edit
      </Button>
      <Button
        onClick={() => {
          setActiveDeleteCategory(category);
        }}
        addClass="admin-delete"
      >
        Delete
      </Button>
    </div>
  </div>
);

export default ChildrenCategory;
