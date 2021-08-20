/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IoMdOptions } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductsContainer.module.scss';
import PhotoCamerasFilter from '../../components/ProductsFilter/PhotoCamerasFilter';
import ProductsField from '../../components/ProductsField/ProductsField';
import {
  clearProductsAction,
  getAllProductsCurrentCategoryAction,
  getFilteredProductsAction,
  setCurrentPageAction,
  showGridAction,
} from '../../store/products/actions';
import Loader from '../../components/UI/Loader/Loader';
import VideoCamerasFilter from '../../components/ProductsFilter/VideoCamerasFilter';
import ActionCamerasFilter from '../../components/ProductsFilter/ActionCamerasFilter';
import LensesFilter from '../../components/ProductsFilter/LensesFilter';
import ProductsSorting from '../../components/ProductsSorting/ProductsSorting';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const currentPerPage = useSelector(
    (state) => state.productsPage.currentPerPage
  );
  const productsQuantity = useSelector(
    (state) => state.productsPage.productsQuantity
  );
  const currentFilterQuery = useSelector(
    (state) => state.productsPage.currentFilterQuery
  );

  useEffect(() => {
    const pagesCount = Math.ceil(productsQuantity / currentPerPage);
    let queryPage = page;
    if (pagesCount < page) {
      queryPage = pagesCount;
      if (queryPage === 0) {
        queryPage = 1;
      }
    }
    dispatch(clearProductsAction());
    dispatch(
      getFilteredProductsAction(
        currentCategory,
        queryPage,
        currentPerPage,
        currentFilterQuery
      )
    );
    dispatch(setCurrentPageAction(queryPage));

    // dispatch(getAllProductsCurrentCategoryAction(currentCategory));
  }, [
    currentCategory,
    currentFilterQuery,
    currentPerPage,
    dispatch,
    page,
    productsQuantity,
  ]);
  const products = useSelector((state) => state.productsPage.products);
  const isLoadingProducts = useSelector(
    (state) => state.productsPage.isLoadingProducts
  );
  const currentPage = useSelector((state) => state.productsPage.currentPage);
  const allProducts = useSelector(
    (state) => state.productsPage.allProductsForPagination.length
  );

  const handlerSwitch = () => {
    dispatch(showGridAction());
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    console.log('Close');
    document.body.classList.toggle('no-scroll');
    setIsActive(!isActive);
  };
  const filtersMobile = classNames({
    [styles.filtersContainerMobile]: true,
    [styles.filtersContainerMobile_active]: isActive,
  });
  const filtersOverLay = classNames({
    [styles.filtersOverlay]: true,
    [styles.filtersOverlay_active]: isActive,
  });
  const showFiltersBtn = classNames({
    [styles.showFiltersBtn]: true,
    [styles.showFiltersBtn_hidden]: isActive,
  });
  return (
    <div className={styles.ProductsPageWrapper}>
      <div className="container">
        <div className={styles.ProductsContainer}>
          <div className={showFiltersBtn} onClick={handleClick}>
            <IoMdOptions />
          </div>
          <div className={styles.filterContainer}>
            {currentCategory === 'photocameras' && <PhotoCamerasFilter />}
            {currentCategory === 'videocameras' && <VideoCamerasFilter />}
            {currentCategory === 'actioncameras' && <ActionCamerasFilter />}
            {currentCategory === 'lenses' && <LensesFilter />}
          </div>
          <div className={styles.ProductsBlock}>
            <ProductsSorting
              currentPage={currentPage}
              allProducts={allProducts}
              handlerSwitch={handlerSwitch}
            />
            {products.length === 0 ? (
              <div className={styles.PrductsFieldLoader}>
                <Loader />
              </div>
            ) : (
              !isLoadingProducts && <ProductsField products={products} />
            )}
          </div>
        </div>
      </div>
      <div className={filtersOverLay} onClick={handleClick}></div>
      <div className={filtersMobile}>
        <div className={styles.filtersCloseBtn} onClick={handleClick}>
          <VscChromeClose />
        </div>
        {currentCategory === 'photocameras' && <PhotoCamerasFilter />}
        {currentCategory === 'videocameras' && <VideoCamerasFilter />}
        {currentCategory === 'actioncameras' && <ActionCamerasFilter />}
        {currentCategory === 'lenses' && <LensesFilter />}
      </div>
    </div>
  );
};

export default React.memo(ProductsContainer);
