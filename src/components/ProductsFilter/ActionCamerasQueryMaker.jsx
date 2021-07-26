/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../store/products/actions';

const ActionCamerasQueryMaker = ({priceState, matrixType, features, wireless}) => {
  const rangeQuery = `&minPrice=${priceState[0]}&maxPrice=${priceState[1]}`;
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const dispatch = useDispatch();

  const result = useMemo(() => {
    const matrixTypeArr = Object.keys(matrixType).map((item) => {
      if (item === 'checkboxA' && matrixType[item].status) {
        return '8';
      }
      if (item === 'checkboxB' && matrixType[item].status) {
        return '12';
      }
      if (item === 'checkboxC' && matrixType[item].status) {
        return '23';
      }
      return null;
    });

    const featuresArr = Object.keys(features).map((item) => {
      if (item === 'checkboxA' && features[item].status) {
        return 'HDR';
      }
      if (item === 'checkboxB' && features[item].status) {
        return 'WDR';
      }
      if (item === 'checkboxC' && features[item].status) {
        return 'быстрая зарядка';
      }
      if (item === 'checkboxD' && features[item].status) {
        return 'голосовое управление';
      }
      return null;
    });

    const wirelessArr = Object.keys(wireless).map((item) => {
      if (item === 'checkboxA' && wireless[item].status) {
        return 'Bluetooth';
      }
      if (item === 'checkboxB' && wireless[item].status) {
        return 'GPS';
      }
      if (item === 'checkboxC' && wireless[item].status) {
        return 'Wi-Fi';
      }
      return null;
    });

    const filteredMatrixTypeArr = matrixTypeArr.filter((item) => item !== null);
    const filteredFeaturesArr = featuresArr.filter((item) => item !== null);
    const filteredWirelessArr = wirelessArr.filter((item) => item !== null);

    // console.log('filteredQueryArr', filteredQueryArr.join(','));
    // const addQuery = `&characteristics.type[1]=${queryArr.toString()}`;
    let addQueryMatrixType = '';
    let addQueryFeatures = '';
    let addQueryWireless = '';

    if (filteredMatrixTypeArr.length > 0) {
      addQueryMatrixType = `&matrix=${filteredMatrixTypeArr.join(',')}`;
    }
    if (filteredFeaturesArr.length > 0) {
      addQueryFeatures = `&features=${filteredFeaturesArr.join(',')}`;
    }
    if (filteredWirelessArr.length > 0) {
      addQueryWireless = `&wireless=${filteredWirelessArr.join(',')}`;
    }

    const finalQuery =
    addQueryMatrixType + addQueryFeatures + addQueryWireless + rangeQuery;
    if (finalQuery) {
      console.log('FINAL QUERY: ', finalQuery);
      dispatch(
        getFilteredProductsAction(currentCategory, page, perPage, finalQuery)
      );
    } else {
      console.log('SHOW ALL!!!');
      dispatch(getFilteredProductsAction(currentCategory, page, perPage, ''));
    }
  }, [currentCategory, dispatch, features, matrixType, page, perPage, rangeQuery, wireless]);

  return null;
};

export default memo(ActionCamerasQueryMaker);
