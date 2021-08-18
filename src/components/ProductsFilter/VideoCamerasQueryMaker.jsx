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

const VideoCamerasQueryMaker = ({
  lenseType,
  priceState,
  fileFormat,
  connectors,
}) => {
  const rangeQuery = `&minPrice=${priceState[0]}&maxPrice=${priceState[1]}`;
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const sortBy = useSelector((state) => state.productsPage.sortBy);
  const addQuerySortBy = `&sort=${sortBy}`;
  const dispatch = useDispatch();

  const result = useMemo(() => {
    const connectorsArr = Object.keys(connectors).map((item) => {
      if (item === 'checkboxA' && connectors[item].status) {
        return 'HDMI';
      }
      if (item === 'checkboxB' && connectors[item].status) {
        return 'USB';
      }
      if (item === 'checkboxC' && connectors[item].status) {
        return 'MICRO';
      }
      return null;
    });

    const lenseTypeArr = Object.keys(lenseType).map((item) => {
      if (item === 'checkboxA' && lenseType[item].status) {
        return 'Leica Dicomar';
      }
      if (item === 'checkboxB' && lenseType[item].status) {
        return 'G Lens HXR-MC2500';
      }
      return null;
    });

    const fileFormatArr = Object.keys(fileFormat).map((item) => {
      if (item === 'checkboxA' && fileFormat[item].status) {
        return 'AVCHD';
      }
      if (item === 'checkboxB' && fileFormat[item].status) {
        return 'MOV';
      }
      if (item === 'checkboxC' && fileFormat[item].status) {
        return 'MP4';
      }
      return null;
    });

    const filteredConnectorsArr = connectorsArr.filter((item) => item !== null);
    const filteredLenseTypeArr = lenseTypeArr.filter((item) => item !== null);
    const filteredFileFormatArr = fileFormatArr.filter((item) => item !== null);

    let addQueryConnectors = '';
    let addQueryLensType = '';
    let addQueryFileFormat = '';

    if (filteredConnectorsArr.length > 0) {
      addQueryConnectors = `&connectors=${filteredConnectorsArr.join(',')}`;
    }
    if (filteredLenseTypeArr.length > 0) {
      addQueryLensType = `&lenceType=${filteredLenseTypeArr.join(',')}`;
    }
    if (filteredFileFormatArr.length > 0) {
      addQueryFileFormat = `&format=${filteredFileFormatArr.join(',')}`;
    }
    const finalQuery =
      addQueryConnectors + addQueryFileFormat + addQueryLensType + rangeQuery;
    dispatch(setCurrentFilterAction(finalQuery));
    return finalQuery;
  }, [connectors, dispatch, fileFormat, lenseType, rangeQuery]);

  return null;
};

export default memo(VideoCamerasQueryMaker);
