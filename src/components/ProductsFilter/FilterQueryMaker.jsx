/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../store/products/actions';

const FilterQueryMaker = ({
  typeFilter,
  brandFilter,
  setFilter,
  matrixSizeFilter,
}) => {
  console.log('QUERY', typeFilter);
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const dispatch = useDispatch();

  const result = useMemo(() => {
    const typeArr = Object.keys(typeFilter).map((item) => {
      if (item === 'mirror' && typeFilter[item]) {
        return 'Зеркальный';
      }
      if (item === 'compact' && typeFilter[item]) {
        return 'Компактный';
      }
      if (item === 'system' && typeFilter[item]) {
        return 'Системный';
      }
      if (item === 'zoom' && typeFilter[item]) {
        return 'Суперзум';
      }
      return null;
    });

    const brandArr = Object.keys(brandFilter).map((item) => {
      if (item === 'canon' && brandFilter[item]) {
        return 'Canon';
      }
      if (item === 'nikon' && brandFilter[item]) {
        return 'Nikon';
      }
      if (item === 'sony' && brandFilter[item]) {
        return 'Sony';
      }
      if (item === 'olympus' && brandFilter[item]) {
        return 'Olympus';
      }
      if (item === 'fuji' && brandFilter[item]) {
        return 'Fuji';
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
    const filteredTypeArr = typeArr.filter((item) => item !== null);
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
    brandFilter,
    currentCategory,
    dispatch,
    matrixSizeFilter,
    page,
    setFilter,
    typeFilter,
  ]);

  return null;
};

export default memo(FilterQueryMaker);
