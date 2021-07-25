/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-debugger */
import React from 'react';
import { useSelector } from 'react-redux';
import RangeSlider from './RangeSlider';

const RangeSliderContainer = ({
  priceState,
  rangeSelector,
  handleChangeMinRange,
  handleChangeMaxRange,
  sentPriceDataHandler,
}) => {
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  // const allProducts = useSelector((state) => state.productsPage.products);

  // const maxPrice = allProducts.reduce((acc, curr) => {
  //     if (acc.currentPrice > curr.currentPrice) {
  //       return acc;
  //     }
  //     return curr;
  //   }, 0);
  // const minPrice = allProducts.reduce((acc, curr) => {
  // if (acc.currentPrice < curr.currentPrice) {
  //     return acc;
  // }
  // return curr;
  // }, 0);

  return (
    <>
      <RangeSlider
        currentCategory={currentCategory}
        page={page}
        maxPrice={100000}
        minPrice={0}
        rangeSelector={rangeSelector}
        handleChangeMinRange={handleChangeMinRange}
        handleChangeMaxRange={handleChangeMaxRange}
        sentPriceDataHandler={sentPriceDataHandler}
        priceState={priceState}
      />
    </>
  );
};

export default RangeSliderContainer;
