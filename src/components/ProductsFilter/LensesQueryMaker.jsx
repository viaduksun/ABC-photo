/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearProductsAction, getFilteredProductsAction } from '../../store/products/actions';

const LensesQueryMaker = ({ brandType, lenseType, bionet, priceState }) => {
  const rangeQuery = `&minPrice=${priceState[0]}&maxPrice=${priceState[1]}`;
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const dispatch = useDispatch();

  const result = useMemo(() => {
    const brandArr = Object.keys(brandType).map((item) => {
      if (item === 'checkboxA' && brandType[item].status) {
        return 'Canon';
      }
      if (item === 'checkboxB' && brandType[item].status) {
        return 'Nikon';
      }
      if (item === 'checkboxC' && brandType[item].status) {
        return 'Panasonic';
      }
      if (item === 'checkboxD' && brandType[item].status) {
        return 'Sony';
      }
      return null;
    });

    const lenseTypeArr = Object.keys(lenseType).map((item) => {
      if (item === 'checkboxA' && lenseType[item].status) {
        return 'макрообъектив';
      }
      if (item === 'checkboxB' && lenseType[item].status) {
        return 'портретный';
      }
      if (item === 'checkboxC' && lenseType[item].status) {
        return 'рыбий глаз';
      }
      if (item === 'checkboxD' && lenseType[item].status) {
        return 'сверхширокоугольный';
      }
      return null;
    });

    const bionetArr = Object.keys(bionet).map((item) => {
      if (item === 'checkboxA' && bionet[item].status) {
        return 'Canon';
      }
      if (item === 'checkboxB' && bionet[item].status) {
        return 'Fujifilm';
      }
      if (item === 'checkboxC' && bionet[item].status) {
        return 'Nikon';
      }
      if (item === 'checkboxD' && bionet[item].status) {
        return 'Panasonic';
      }
      return null;
    });

    const filteredBrandArr = brandArr.filter((item) => item !== null);
    const filteredlenseTypeArr = lenseTypeArr.filter((item) => item !== null);
    const filteredbionetArr = bionetArr.filter((item) => item !== null);

    // console.log('filteredQueryArr', filteredQueryArr.join(','));
    // const addQuery = `&characteristics.type[1]=${queryArr.toString()}`;
    let addQueryBrand = '';
    let addQueryType = '';
    let addQueryBionet = '';

    if (filteredBrandArr.length > 0) {
      addQueryBrand = `&brand=${filteredBrandArr.join(',')}`;
    }
    if (filteredlenseTypeArr.length > 0) {
      addQueryType = `&lenseType=${filteredlenseTypeArr.join(',')}`;
    }
    if (filteredbionetArr.length > 0) {
      addQueryBionet = `&bionet=${filteredbionetArr.join(',')}`;
    }

    const finalQuery =
      addQueryType + addQueryBrand + addQueryBionet + rangeQuery;
    if (finalQuery) {
      console.log('FINAL QUERY: ', finalQuery);
      dispatch(clearProductsAction());
      dispatch(
        getFilteredProductsAction(currentCategory, page, perPage, finalQuery)
      );
    } else {
      console.log('SHOW ALL!!!');
      dispatch(clearProductsAction());
      dispatch(getFilteredProductsAction(currentCategory, page, perPage, ''));
    }
  }, [
    bionet,
    brandType,
    currentCategory,
    dispatch,
    lenseType,
    page,
    perPage,
    rangeQuery,
  ]);

  return null;
};

export default memo(LensesQueryMaker);
