/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredProductsAction } from '../../../store/products/actions';

const TypeQueryMaker = ({ queryState }) => {
  // const dispatch = useDispatch();
  console.log(queryState);
  // const result = useMemo(() => {
  // const tempArr = Object.keys(queryState).map((item, i) => {
  //   console.log(item);
  //   if (item === 'checkedA' && queryState[item]) {
  //     return 'Query-A';
  //   }
  //   if (item === 'checkedD' && queryState[item]) {
  //     return 'Query-B';
  //   }
  //   return null;
  // });
  // console.log(tempArr);
  // ====
  // }, [queryState]);
  // const result = useMemo(() => {
  //   const tempArr = Object.keys(queryState).map((item, i) => {
  //     console.log(item);
  //     if (item === 'checkedA' && queryState[item]) {
  //       return 'Query-A';
  //     }
  //     if (item === 'checkedD' && queryState[item]) {
  //       return 'Query-B';
  //     }
  //     return null;
  //   });
  //   console.log(tempArr);
  // }, [queryState]);

  const addQuery = '';
  // dispatch(getFilteredProductsAction(currentCategory, page, addQuery));
  return null;
};

export default TypeQueryMaker;
