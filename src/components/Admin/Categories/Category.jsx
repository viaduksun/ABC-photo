/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Button from '../../UI/Button/Button';
import styles from './Categories.module.scss';
import ChildrenCategory from './ChildrenCategory';

const Category = ({
  category,
  childrenCategoryArray,
  index,
  toggleActive,
  active,
  setActiveEditCategory,
  setActiveDeleteCategory,
}) => (
  <>
    <div className={styles.CategoryWrapper}>
      <div
        className={classNames({
          [styles.CategoryCard]: true,
          [styles.CategoryCard_active]: active === category.id,
        })}
      >
        <div className={styles.number}>{index + 1}</div>
        <div className={styles.preview}>
          <img src={category.imgUrl} alt={category.name} />
        </div>
        <div className={styles.title}>{category.name}</div>
        <div className={styles.btnbArrowWrapper}>
          <BsChevronDown
            className={classNames({
              [styles.btnbArrow]: true,
              [styles.btnbArrow_active]: active === category.id,
            })}
            onClick={() => toggleActive(category.id)}
          />
        </div>
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
      <div
        className={classNames({
          [styles.CildrenCategoryWrapper]: true,
          [styles.CildrenCategoryWrapper_active]: active === category.id,
        })}
      >
        {childrenCategoryArray.map((item, i) => (
          <ChildrenCategory
            category={item}
            index={i}
            setActiveEditCategory={setActiveEditCategory}
            setActiveDeleteCategory={setActiveDeleteCategory}
          />
        ))}
      </div>
    </div>
  </>
);

export default Category;
