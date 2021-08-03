/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';
import {
  setCurrentCategoryAction,
  setCurrentPageAction,
  setCurrentPerPageAction,
} from '../store/products/actions';

const Products = () => {
  const currentCategory = useSelector((state) => state.productsPage.currentCategory);
  let activeBreadcrumbs = '';
  if (currentCategory === 'photocameras') {
    activeBreadcrumbs = 'Фотоаппараты';
  } else if (currentCategory === 'videocameras') {
    activeBreadcrumbs = 'Видеокамеры';
  } else if (currentCategory === 'actioncameras') {
    activeBreadcrumbs = 'Экшнкамеры';
  } else if (currentCategory === 'lenses') {
    activeBreadcrumbs = 'Объективы';
  }
  const array = [['/', 'Главная'], ['products', activeBreadcrumbs]];
  const dispatch = useDispatch();
  useEffect(() => {
    const currentCategory = localStorage.getItem('currentCategory');
    const currentPage = localStorage.getItem('currentPage');
    const currentPerPage = localStorage.getItem('currentPerPage');

    if (currentCategory) {
      dispatch(setCurrentCategoryAction(currentCategory));
    }
    if (currentPage) {
      dispatch(setCurrentPageAction(currentPage));
    } else {
      dispatch(setCurrentPageAction(1));
    }
    if (currentPerPage) {
      dispatch(setCurrentPerPageAction(currentPerPage));
    } else {
      dispatch(setCurrentPerPageAction(6));
    }
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs data={array} />
      <ProductsContainer />
      <Stories />
    </>
  );
};

export default Products;
