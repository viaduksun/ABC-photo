/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../../api/getProducts';
import getOneProduct from '../../../api/getOneProduct';
import deleteOneProduct from '../../../api/deleteOneProduct';
import styles from './Products.module.scss';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import Modal from '../../Modal/Modal';
import { editProductModalOpen } from '../../../store/madals/actions';
import {
  adminProducts,
  removeProduct,
  modalDeleteOpen,
} from '../../../store/admin/actions';
import EditProduct from '../EditProduct';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminProducts());
  }, [dispatch]);

  const isEditProductOpen = useSelector(
    (state) => state.modals.isEditProductModalOpen
  );
  const productsArr = useSelector((state) => state.admin.products);
  const isModalRemoveProductOpen = useSelector(
    (state) => state.admin.isModalRemoveProductOpen
  );
  const isLoadingProducts = useSelector(
    (state) => state.admin.isLoadingProducts
  );
  const handleEdit = (product) => {
    console.log('Edit', product);

    // const clickedProduct = e.target.parentElement.getAttribute('data-id');
    // setEditModal(true);
    dispatch(editProductModalOpen(product));
    // dispatch(getOneProductAxios(clickedProduct));
  };
  const handleDelete = (product) => {
    console.log('DEL-FUNCTION');
    console.log(product.itemNo);
    deleteOneProduct(product.itemNo);
    dispatch(removeProduct(product));
  };
  const handleModalDelete = () => {
    console.log('modal delete');
    dispatch(modalDeleteOpen());
  };
  const handleModal = () => {
    console.log('Modal');
  };
  const btnBlock = (
    <>
      <Button onClick={handleModal} type="admin-edit">
        Edit
      </Button>
      <Button onClick={handleModal} type="admin-cancel">
        Cancel
      </Button>
    </>
  );
  const btnRemoveProductModal = (
    <>
      <Button onClick={handleDelete} type="admin-edit">
        Delete
      </Button>
      <Button onClick={handleModal} type="admin-cancel">
        Cancel
      </Button>
    </>
  );
  return (
    <div className={styles.ProductsWrapper}>
      {isLoadingProducts && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {!isLoadingProducts &&
        productsArr.map((product, index) => (
          <div key={product._id} className={styles.ProductWrapper}>
            <span className={styles.number}>{index + 1}</span>
            <div className={styles.preview}>
              <img src={product.imageUrls[0]} alt={product.name} />
            </div>
            <div className={styles.title}>{product.name}</div>
            <div className={styles.btnblock} data-id={product.itemNo}>
              <Button
                onClick={() => {
                  handleEdit(product);
                }}
                type="admin-edit"
              >
                Edit
              </Button>
              <Button onClick={handleModalDelete} type="admin-delete">
                Delete
              </Button>
            </div>
          </div>
        ))}
      {isEditProductOpen && (
        <Modal title="Edit" body={<EditProduct />} btnBlock={btnBlock} />
      )}
      {isModalRemoveProductOpen && (
        <Modal
          title="Delete"
          body="A you sure?"
          btnBlock={btnRemoveProductModal}
        />
      )}
    </div>
  );
};

export default Products;
