/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../../../api/getProducts';
import getOneProduct from '../../../api/getOneProduct';
import styles from './Products.module.scss';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import Modal from '../../Modal/Modal';
import {
  editProductModalOpen,
  getOneProductAxios,
} from '../../../store/madals/actions';
import EditProduct from '../EditProduct';

const Products = () => {
  const [isLoadig, setIsLoadig] = useState(true);
  const [productsArr, setProductsArr] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [currentProduct, setcurrentProduct] = useState('');

  const dispatch = useDispatch();
  const isEditProductOpen = useSelector(
    (state) => state.modalsReducer.isEditProductModalOpen
  );

  useEffect(() => {
    getProducts().then((products) => {
      setProductsArr(products.data);
      setIsLoadig(false);
    });
  }, [productsArr]);
  const handleEdit = (product) => {
    console.log('Edit', product);
    setcurrentProduct(product);
    // const clickedProduct = e.target.parentElement.getAttribute('data-id');
    // setEditModal(true);
    dispatch(editProductModalOpen(product));
    // dispatch(getOneProductAxios(clickedProduct));
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
  return (
    <div className={styles.ProductsWrapper}>
      {isLoadig && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {!isLoadig &&
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
              <Button
                onClick={(e) => {
                  handleEdit(e);
                }}
                type="admin-delete"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      {isEditProductOpen && (
        <Modal title="Edit" body={<EditProduct />} btnBlock={btnBlock} />
      )}
    </div>
  );
};

export default Products;
