/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';
import {
  setCurrentCategoryAction,
  setCurrentPageAction,
  setCurrentPerPageAction,
} from '../store/products/actions';

const Products = () => {
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
  const array = [
    ['/', 'Главная'],
    ['products', 'Цифровая техника'],
  ];
  return (
    <>
      <Breadcrumbs data={array} />
      <ProductsContainer />
      <Stories />
    </>
  );
};

export default Products;
