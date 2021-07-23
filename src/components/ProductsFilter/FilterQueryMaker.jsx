/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../store/products/actions';

const FilterQueryMaker = ({
  brandFilter,
  setFilter,
  matrixSizeFilter,
  typeState,
  brandState,
}) => {
  console.log('QUERY', typeState);
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const dispatch = useDispatch();

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
    console.log(typeStatusArr);
    // const typeArr = Object.keys(typeFilter).map((item) => {
    //   if (item === 'mirror' && typeFilter[item]) {
    //     return 'Зеркальный';
    //   }
    //   if (item === 'compact' && typeFilter[item]) {
    //     return 'Компактный';
    //   }
    //   if (item === 'system' && typeFilter[item]) {
    //     return 'Системный';
    //   }
    //   if (item === 'zoom' && typeFilter[item]) {
    //     return 'Суперзум';
    //   }
    //   return null;
    // });

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
      if (item === 'yes' && setFilter[item]) {
        return 'С объективом';
      }
      if (item === 'no' && setFilter[item]) {
        return 'Без объектива';
      }
      return null;
    });
    const matrixSizeArr = Object.keys(matrixSizeFilter).map((item) => {
      if (item === 'checkedA' && matrixSizeFilter[item]) {
        return '1` (13.2 х 8.8 мм)';
      }
      if (item === 'checkedB' && matrixSizeFilter[item]) {
        return '1/2.3` (6.2 х 4.6 мм)';
      }
      if (item === 'checkedC' && matrixSizeFilter[item]) {
        return '1/3` (4.52 х 3.39 мм)';
      }
      if (item === 'checkedD' && matrixSizeFilter[item]) {
        return 'APS-C (22.3 х 14.8 мм)';
      }
      if (item === 'checkedE' && matrixSizeFilter[item]) {
        return 'APS-C (23.5 х 15.7 мм)';
      }
      if (item === 'checkedF' && matrixSizeFilter[item]) {
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
    console.log(addQueryMatrixSize);
    const finalQuery =
      addQueryType + addQueryBrand + addQuerySet + addQueryMatrixSize;
    if (finalQuery) {
      console.log('FINAL QUERY: ', finalQuery);
      dispatch(getFilteredProductsAction(currentCategory, page, finalQuery));
    } else {
      console.log('SHOW ALL!!!');
      dispatch(getFilteredProductsAction(currentCategory, page, ''));
    }
  }, [
    brandState,
    currentCategory,
    dispatch,
    matrixSizeFilter,
    page,
    setFilter,
    typeState,
  ]);

  return null;
};

export default memo(FilterQueryMaker);
