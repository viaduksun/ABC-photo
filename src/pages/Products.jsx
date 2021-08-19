/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';
import Stories from '../containers/Stories/Stories';
import {
  historyActioncameras,
  historyPhotocameras,
  historyVideocameras,
  historyLenses,
} from '../Data/historyData';
import {
  setCurrentCategoryAction,
  setCurrentPageAction,
  setCurrentPerPageAction,
} from '../store/products/actions';

const Products = (props) => {
  const currentCategory = useSelector((state) => state.productsPage.currentCategory);
  useEffect(() => {
    // console.log('PRODUCTS', props.history);
    props.history.push(`/products/${currentCategory}`);
  }, [currentCategory, props.history]);

  const currentCategoryForBreadcrumbs = useSelector(
    (state) => state.productsPage.currentCategoryForBreadcrumbs
  );
  let activeBreadcrumbs = '';
  let historyData = '';
  if (currentCategoryForBreadcrumbs === 'photocameras') {
    activeBreadcrumbs = 'Фотоаппараты';
    historyData = historyPhotocameras;
  } else if (currentCategoryForBreadcrumbs === 'videocameras') {
    activeBreadcrumbs = 'Видеокамеры';
    historyData = historyVideocameras;
  } else if (currentCategoryForBreadcrumbs === 'actioncameras') {
    activeBreadcrumbs = 'Экшнкамеры';
    historyData = historyActioncameras;
  } else if (currentCategoryForBreadcrumbs === 'lenses') {
    activeBreadcrumbs = 'Объективы';
    historyData = historyLenses;
  }
  const array = [
    ['/', 'Главная'],
    ['products', activeBreadcrumbs],
  ];
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
      dispatch(setCurrentPerPageAction(3));
    }
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs data={array} />
      <ProductsContainer />
      <Stories historyData={historyData} />
    </>
  );
};

export default withRouter(Products);
