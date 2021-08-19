/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearProductsAction,
  getFilteredProductsAction,
  setCurrentFilterAction,
} from '../../store/products/actions';

const ActionCamerasQueryMaker = ({
  priceState,
  matrixType,
  features,
  wireless,
}) => {
  const rangeQuery = `&minPrice=${priceState[0]}&maxPrice=${priceState[1]}`;
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const sortBy = useSelector((state) => state.productsPage.sortBy);
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

    let addQueryMatrixType = '';
    let addQueryFeatures = '';
    let addQueryWireless = '';
    let addQuerySortBy = '';

    if (filteredMatrixTypeArr.length > 0) {
      addQueryMatrixType = `&matrix=${filteredMatrixTypeArr.join(',')}`;
    }
    if (filteredFeaturesArr.length > 0) {
      addQueryFeatures = `&features=${filteredFeaturesArr.join(',')}`;
    }
    if (filteredWirelessArr.length > 0) {
      addQueryWireless = `&wireless=${filteredWirelessArr.join(',')}`;
    }
    if (sortBy) {
      addQuerySortBy = `&sort=${sortBy}`;
    }

    const finalQuery =
      addQueryMatrixType + addQueryFeatures + addQuerySortBy + addQueryWireless + rangeQuery;
    dispatch(setCurrentFilterAction(finalQuery));
    return finalQuery;
  }, [dispatch, features, matrixType, rangeQuery, sortBy, wireless]);

  return null;
};

export default memo(ActionCamerasQueryMaker);
