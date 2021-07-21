/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../../store/products/actions';

const TypeQueryMaker = ({ queryState }) => {
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const dispatch = useDispatch();

  const result = useMemo(() => {
    // const queryA = '&characteristics.type[1]=Зеркальный';
    const queryA = 'Зеркальный';
    const queryB = 'Компактный';
    const queryC = 'Системный';
    const queryD = 'Суперзум';

    const queryArr = Object.keys(queryState).map((item, i) => {
      // console.log(item);
      if (item === 'checkedA' && queryState[item]) {
        return queryA;
      }
      if (item === 'checkedB' && queryState[item]) {
        return queryB;
      }
      if (item === 'checkedC' && queryState[item]) {
        return queryC;
      }
      if (item === 'checkedD' && queryState[item]) {
        return queryD;
      }
      return null;
    });
    console.log(queryArr);

    const filteredQueryArr = queryArr.filter((item) => item !== null);
    console.log('filteredQueryArr', filteredQueryArr.join(','));
    // const addQuery = `&characteristics.type[1]=${queryArr.toString()}`;
    if (filteredQueryArr.length > 0) {
      const addQuery = `&type=${filteredQueryArr.join(',')}`;
      dispatch(getFilteredProductsAction(currentCategory, page, addQuery));
    } else {
      console.log('SHOW ALL!!!');
      dispatch(getFilteredProductsAction(currentCategory, page, ''));
    }
  }, [currentCategory, dispatch, page, queryState]);

  return null;
};

export default memo(TypeQueryMaker);
