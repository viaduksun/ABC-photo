/* eslint-disable max-len */
/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RangeSlider from './RangeSlider';

const RangeSliderContainer = () => {
    const currentCategory = useSelector(
        (state) => state.productsPage.currentCategory
      );
    const allProducts = useSelector((state) => state.productsPage.products);
    const page = useSelector((state) => state.productsPage.currentPage);
   
    const maxPrice = allProducts.reduce((acc, curr) => {
        if (acc.currentPrice > curr.currentPrice) {
          return acc;
        }
        return curr;
      }, 0);
    const minPrice = allProducts.reduce((acc, curr) => {
    if (acc.currentPrice < curr.currentPrice) {
        return acc;
    }
    return curr;
    }, 0);

    const [price, setPrice] = useState([minPrice.currentPrice, maxPrice.currentPrice]);

    const rangeSelector = (event, newValue) => {
        setPrice(newValue);
      };
      const handleChangeMinRange = (event) => {
        setPrice([+event.target.value, +price[1]]);
      };
      const handleChangeMaxRange = (event) => {
        setPrice([+price[0], +event.target.value]);
      };
      const addQuery = `&minPrice=${price[0]}&maxPrice=${price[1]}`;

    return (
      <>
        <RangeSlider
          currentCategory={currentCategory}
          page={page}
          maxPrice={maxPrice.currentPrice}
          minPrice={minPrice.currentPrice}
          rangeSelector={rangeSelector}
          handleChangeMinRange={handleChangeMinRange}
          handleChangeMaxRange={handleChangeMaxRange}
          addQuery={addQuery}
          price={price}
        />
      </>
    );
};

export default RangeSliderContainer;