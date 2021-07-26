/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../store/products/actions';

const FilterQueryMaker = ({
  setFilter,
  matrixState,
  typeState,
  brandState,
  priceState,
}) => {
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const sortBy = useSelector((state) => state.productsPage.sortBy);
  const dispatch = useDispatch();

  const rangeQuery = `&minPrice=${priceState[0]}&maxPrice=${priceState[1]}`;
  const addQuerySortBy = `&sort=${sortBy}`;

  const result = useMemo(() => {
    const typeStatusArr = Object.keys(typeState).map((item) => {
      if (item === 'checkboxA' && typeState[item].status) {
        return 'Зеркальный';
      }
      if (item === 'checkboxB' && typeState[item].status) {
        return 'Компактный';
      }
      if (item === 'checkboxC' && typeState[item].status) {
        return 'Системный';
      }
      if (item === 'checkboxD' && typeState[item].status) {
        return 'Суперзум';
      }
      return null;
    });

    const brandArr = Object.keys(brandState).map((item) => {
      if (item === 'checkboxA' && brandState[item].status) {
        return 'Canon';
      }
      if (item === 'checkboxB' && brandState[item].status) {
        return 'Nikon';
      }
      if (item === 'checkboxC' && brandState[item].status) {
        return 'Fuji';
      }
      if (item === 'checkboxD' && brandState[item].status) {
        return 'Olympus';
      }
      if (item === 'checkboxE' && brandState[item].status) {
        return 'Sony';
      }
      return null;
    });

    const setArr = Object.keys(setFilter).map((item) => {
      if (item === 'checkboxA' && setFilter[item].status) {
        return 'С объективом';
      }
      if (item === 'checkboxB' && setFilter[item].status) {
        return 'Без объектива';
      }
      return null;
    });
    const matrixSizeArr = Object.keys(matrixState).map((item) => {
      if (item === 'checkboxA' && matrixState[item].status) {
        return '1` (13.2 х 8.8 мм)';
      }
      if (item === 'checkboxB' && matrixState[item].status) {
        return '1/2.3` (6.2 х 4.6 мм)';
      }
      if (item === 'checkboxC' && matrixState[item].status) {
        return '1/3` (4.52 х 3.39 мм)';
      }
      if (item === 'checkboxD' && matrixState[item].status) {
        return 'APS-C (22.3 х 14.8 мм)';
      }
      if (item === 'checkboxE' && matrixState[item].status) {
        return 'APS-C (23.5 х 15.7 мм)';
      }
      if (item === 'checkboxF' && matrixState[item].status) {
        return 'Full Frame (36 х 24 мм)';
      }

      return null;
    });
    const filteredTypeArr = typeStatusArr.filter((item) => item !== null);
    const filteredBrandArr = brandArr.filter((item) => item !== null);
    const filteredSetArr = setArr.filter((item) => item !== null);
    const filteredMatrixSizeArr = matrixSizeArr.filter((item) => item !== null);
    // console.log('filteredQueryArr', filteredQueryArr.join(','));
    // const addQuery = `&characteristics.type[1]=${queryArr.toString()}`;
    let addQueryType = '';
    let addQueryBrand = '';
    let addQuerySet = '';
    let addQueryMatrixSize = '';
    
    if (filteredTypeArr.length > 0) {
      addQueryType = `&type=${filteredTypeArr.join(',')}`;
    }
    if (filteredBrandArr.length > 0) {
      addQueryBrand = `&brand=${filteredBrandArr.join(',')}`;
    }
    if (filteredSetArr.length > 0) {
      addQuerySet = `&set=${filteredSetArr.join(',')}`;
    }
    if (filteredMatrixSizeArr.length > 0) {
      addQueryMatrixSize = `&matrixSize=${filteredMatrixSizeArr.join(',')}`;
    }
    // console.log(addQueryMatrixSize);
    const finalQuery =
      addQueryType +
      addQueryBrand +
      addQuerySet +
      addQueryMatrixSize +
      addQuerySortBy +
      rangeQuery;
    if (finalQuery) {
      // console.log('FINAL QUERY: ', finalQuery);
      dispatch(
        getFilteredProductsAction(currentCategory, page, perPage, finalQuery)
      );
    } else {
      // console.log('SHOW ALL!!!');
      dispatch(getFilteredProductsAction(currentCategory, page, perPage, ''));
    }
  }, [
    brandState,
    currentCategory,
    dispatch,
    matrixState,
    page,
    perPage,
    rangeQuery,
    setFilter,
    typeState,
    addQuerySortBy
  ]);

  return null;
};

export default memo(FilterQueryMaker);
