/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import classNames from 'classnames';
import getProducts from '../../../api/getProducts';
import getOneProduct from '../../../api/getOneProduct';
import deleteOneProduct from '../../../api/deleteOneProduct';
import styles from './Products.module.scss';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import Modal from '../../Modal/Modal';
import {
  editProductModalClose,
  editProductModalOpen,
} from '../../../store/madals/actions';
import {
  adminProducts,
  removeProduct,
  modalDeleteOpen,
  modalDeleteClose,
} from '../../../store/admin/actions';
import EditProduct from '../EditProduct';
import Characteristics from './Characteristics';

const Products = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(adminProducts());
  // }, [dispatch]);
  const [isLoading, setIsLoading] = useState(true);
  // ========= REDUX =================
  const isModalEditProductOpen = useSelector(
    (state) => state.modals.isEditProductModalOpen
  );
  const productsArr = useSelector((state) => state.admin.adminProducts);
  const isModalRemoveProductOpen = useSelector(
    (state) => state.admin.isModalRemoveProductOpen
  );
  const isLoadingProducts = useSelector(
    (state) => state.admin.isLoadingProducts
  );
  // ========= STATE =================
  const [currentProduct, setCurrentProduct] = useState(null);
  const [active, setActive] = useState(null);

  // ========= FUNC =================
  const modalContent = () => {
    console.log(currentProduct);
    if (currentProduct) {
      return (
        <div className={styles.modalContentBlock}>
          <p className={styles.modalContentText}>
            A you sure you want to delete this product?
          </p>
          <div className={styles.modalProductBlock}>
            <div className={styles.modalProductPrev}>
              <img
                src={currentProduct.imageUrls[0]}
                alt={currentProduct.name}
              />
              <img
                src={currentProduct.imageUrls[1]}
                alt={currentProduct.name}
              />
              <img
                src={currentProduct.imageUrls[2]}
                alt={currentProduct.name}
              />
              <img
                src={currentProduct.imageUrls[3]}
                alt={currentProduct.name}
              />
              <p className={styles.modalProductPrevTitle}>
                {currentProduct.name}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  const handleAccordionClick = (id) => {
    if (active === id) {
      return setActive(null);
    }
    setActive(id);
  };
  const handleDelete = () => {
    console.log('DEL-FUNCTION');
    console.log(currentProduct.itemNo);
    deleteOneProduct(currentProduct.itemNo);
    dispatch(removeProduct(currentProduct));
  };
  // ======= MODAL DELETE =================
  const handleModalDeleteOpen = (product) => {
    console.log(product);
    dispatch(modalDeleteOpen());
    setCurrentProduct(product);
  };
  const handleModalDeleteClose = () => {
    dispatch(modalDeleteClose());
  };
  // ======= MODAL EDIT =================
  const handleModalEditOpen = (product) => {
    setCurrentProduct(product);
    dispatch(editProductModalOpen());
  };
  const handleModalEditClose = () => {
    setCurrentProduct({});
    dispatch(editProductModalClose());
  };
  // let submitMyForm = null;
  // const bindSubmitForm = (submitForm) => {
  //   submitMyForm = submitForm;
  // };
  // const handleSubmitMyForm = (e) => {
  //   if (submitMyForm) {
  //     submitMyForm(e);
  //   }
  // };
  const editBtnBlock = (
    <>
      <button
        type="submit"
        form="edit-product"
        className="Button Button_admin-edit"
      >
        Apply changes
      </button>

      <Button onClick={handleModalEditClose} addClass="admin-cancel">
        Cancel
      </Button>
    </>
  );
  const btnRemoveProductModal = (
    <>
      <Button onClick={handleDelete} addClass="admin-edit">
        Delete
      </Button>
      <Button onClick={handleModalDeleteClose} addClass="admin-cancel">
        Cancel
      </Button>
    </>
  );
  const handleProductData = (e) => {
    console.log(e.target.closest('.ProductWrapper'));
  };

  return (
    <>
      <div className={styles.ProductsWrapper}>
        {isLoadingProducts && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
        {isLoading && !productsArr && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
        {!isLoadingProducts &&
          productsArr.map((product, index) => (
            <div key={product._id} className={styles.ProductWrapper}>
              <div
                className={classNames({
                  [styles.productCard]: true,
                  [styles.productCard_active]: active === product.itemNo,
                })}
              >
                <span className={styles.number}>{index + 1}</span>
                <div className={styles.preview}>
                  <img src={product.imageUrls[0]} alt={product.model} />
                </div>
                <div className={styles.title}>{product.model}</div>
                <div className={styles.btnbArrowWrapper}>
                  <BsChevronDown
                    className={classNames({
                      [styles.btnbArrow]: true,
                      [styles.btnbArrow_active]: active === product.itemNo,
                    })}
                    onClick={() => handleAccordionClick(product.itemNo)}
                  />
                </div>
                <div className={styles.btnblock} data-id={product.itemNo}>
                  <Button
                    onClick={() => {
                      handleModalEditOpen(product);
                    }}
                    addClass="admin-edit"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleModalDeleteOpen(product);
                    }}
                    addClass="admin-delete"
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.productDataWrapper]: true,
                  [styles.productDataWrapper_active]: active === product.itemNo,
                })}
              >
                <div className={styles.dataItem}>
                  <div className={styles.dataTitle}>Категория</div>
                  <div className={styles.dataContent}>{product.category}</div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataTitle}>Текущая цена</div>
                  <div className={styles.dataContent}>
                    {product.currentPrice}
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataTitle}>Предыдущая цена</div>
                  <div className={styles.dataContent}>
                    {product.previousPrice}
                  </div>
                </div>
                <div className={styles.dataItem}>
                  <div className={styles.dataTitle}>Количество на складе</div>
                  <div className={styles.dataContent}>{product.quantity}</div>
                </div>

                <div className={styles.dataItem}>
                  <div className={styles.dataTitle}>Хит продаж</div>
                  <div className={styles.dataContent}>{product.hit}</div>
                </div>
                {/* ===================== */}
                <Characteristics charObj={product.characteristics} />
              </div>
            </div>
          ))}
      </div>
      {isModalEditProductOpen && (
        <Modal
          title="Edit"
          body={<EditProduct product={currentProduct} />}
          btnBlock={editBtnBlock}
          onCloseClick={handleModalEditClose}
        />
      )}
      {isModalRemoveProductOpen && (
        <Modal
          title="Delete"
          body={modalContent()}
          btnBlock={btnRemoveProductModal}
          onCloseClick={handleModalDeleteClose}
        />
      )}
    </>
  );
};

export default Products;
