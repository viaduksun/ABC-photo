/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Categories.module.scss';
import Category from './Category';
import EditCategoryForm from './EditCategoryForm';
import {
  modalDeleteCategoryCloseAction,
  modalDeleteCategoryOpenAction,
  modalEditCategoryCloseAction,
  modalEditCategoryOpenAction,
} from '../../../store/admin/actions';
import Modal from '../../Modal/Modal';
import Button from '../../UI/Button/Button';

const Categories = () => {
  const categories = useSelector((state) => state.admin.catalog);
  const isModalEditCategoryOpen = useSelector(
    (state) => state.admin.isModalEditCategoryOpen
  );
  const isModalRemoveCategoryOpen = useSelector(
    (state) => state.admin.isModalRemoveCategoryOpen
  );
  const [active, setActive] = useState(null);
  const [currentCategory, setCurrentCategory] = useState({});
  const dispatch = useDispatch();

  const deleteCategoryModalClose = () => {
    dispatch(modalDeleteCategoryCloseAction());
  };
  const handleModalDeleteCategoryOpen = () => {
    console.log('Delete category');
  };
  const handleModalEditClose = () => {
    console.log('Close');
    dispatch(modalEditCategoryCloseAction());
  };
  const handleDeleteCategory = () => {
    console.log('Delete category');
  };
  const toggleActive = (id) => {
    console.log(id, '===', active);
    if (id === active) {
      console.log('Mach');
      return setActive(null);
    }
    setActive(id);
  };
  const setActiveEditCategory = (currCategory) => {
    setCurrentCategory(currCategory);
    dispatch(modalEditCategoryOpenAction());
  };
  const setActiveDeleteCategory = (currCategory) => {
    setCurrentCategory(currCategory);
    dispatch(modalDeleteCategoryOpenAction());
  };
  // ============== BTNs for modals =======================
  const editCategoryModalsBtns = (
    <>
      <button
        type="submit"
        form="edit-category"
        className="Button Button_admin-edit"
      >
        Apply changes
      </button>

      <Button onClick={handleModalEditClose} addClass="admin-cancel">
        Cancel
      </Button>
    </>
  );
  const RemoveCategoryModalbtns = (
    <>
      <Button onClick={handleDeleteCategory} addClass="admin-edit">
        Delete
      </Button>

      <Button onClick={deleteCategoryModalClose} addClass="admin-cancel">
        Cancel
      </Button>
    </>
  );
  const modalContent = () => {
    console.log(currentCategory);
    if (currentCategory) {
      return (
        <div className={styles.modalContentBlock}>
          <p className={styles.modalContentText}>
            A you sure you want to delete this category?
          </p>
          <div className={styles.modalProductBlock}>
            <div className={styles.modalProductPrev}>
              <img src={currentCategory.imgUrl} alt={currentCategory.name} />
              <p className={styles.modalProductPrevTitle}>
                {currentCategory.name}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  // ====================================
  return (
    <>
      <div className={styles.CategoriesWrapper}>
        {categories.map((category, index) => {
          const childrenCategoryArray = categories.filter(
            (item) => item.parentId === category.name
          );
          if (category.parentId === 'null') {
            return (
              <Category
                category={category}
                childrenCategoryArray={childrenCategoryArray}
                index={index}
                toggleActive={toggleActive}
                active={active}
                setActiveEditCategory={setActiveEditCategory}
                setActiveDeleteCategory={setActiveDeleteCategory}
              />
            );
          }
          return null;
        })}
      </div>
      {isModalEditCategoryOpen && (
        <Modal
          title="Edit category"
          body={<EditCategoryForm currentCategory={currentCategory} />}
          btnBlock={editCategoryModalsBtns}
          onCloseClick={handleModalEditClose}
        />
      )}
      {isModalRemoveCategoryOpen && (
        <Modal
          title="Delete category"
          body={modalContent()}
          btnBlock={RemoveCategoryModalbtns}
          onCloseClick={deleteCategoryModalClose}
        />
      )}
    </>
  );
};

export default Categories;
