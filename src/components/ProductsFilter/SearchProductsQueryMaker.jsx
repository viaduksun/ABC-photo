/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getFilteredSearchProductsAction, getSearchProductsAction } from '../../store/searchProducts/actions';

const FilterQueryMaker = ({
  brandState,
}) => {
  const dispatch = useDispatch();
  const result = useMemo(() => {
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
    const filteredBrandArrCanon = brandArr.filter((item) => item === 'Canon');
    const filteredBrandArrNikon = brandArr.filter((item) => item === 'Nikon');
    console.log(filteredBrandArrCanon);
    console.log(filteredBrandArrNikon);
    let addQueryBrandCanon = '';
    let addQueryBrandNikon = '';
 
    if (filteredBrandArrCanon.length > 0) {
      addQueryBrandCanon = filteredBrandArrCanon.join(',');
    }
    if (filteredBrandArrNikon.length > 0) {
      addQueryBrandNikon = filteredBrandArrNikon.join(',');
    }

    if (addQueryBrandCanon === 'Canon') {
      dispatch(getFilteredSearchProductsAction('Canon'));
    } else {
      // dispatch(getSearchProductsAction('photocameras'));
    }
  }, [brandState, dispatch]);

  return null;
};

export default memo(FilterQueryMaker);
