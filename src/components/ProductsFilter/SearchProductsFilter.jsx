/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductsFilter.module.scss';
import SearchProductsQueryMaker from './SearchProductsQueryMaker';
import RangeSliderContainer from './RangeSlider/RangeSliderContainer';
import FilterBlock from './FilterBlock/FilterBlock';

const SearchProductsFilter = () => {
  // ===== RANGE SELECTOR =====
  const [priceState, setPriceState] = useState([0, 100000]);
  const [priceData, setPriceData] = useState(priceState);

  const rangeSelector = (event, newValue) => {
    setPriceState(newValue);
  };
  const handleChangeMinRange = (event) => {
    setPriceState([+event.target.value, +priceState[1]]);
  };
  const handleChangeMaxRange = (event) => {
    setPriceState([+priceState[0], +event.target.value]);
  };
  const sentPriceDataHandler = () => {
    console.log('CLICK PRICE COLLECT', priceState);
    setPriceData(priceState);
  };
  // ======================================
  const [brandState, setBrandState] = useState({
    checkboxA: {
      title: 'Canon',
      status: false,
    },
    checkboxB: {
      title: 'Nikon',
      status: false,
    },
    checkboxC: {
      title: 'Fuji',
      status: false,
    },
    checkboxD: {
      title: 'Olympus',
      status: false,
    },
    checkboxE: {
      title: 'Sony',
      status: false,
    },
  });
  const handleBrandChange = (event) => {
    setBrandState({
      ...brandState,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // ======================================
  return (
    <div className={styles.ProductsFilter}>
      <SearchProductsQueryMaker
        priceState={priceData}
        // brandState={brandState}
      />
      <RangeSliderContainer
        priceState={priceState}
        rangeSelector={rangeSelector}
        handleChangeMinRange={handleChangeMinRange}
        handleChangeMaxRange={handleChangeMaxRange}
        sentPriceDataHandler={sentPriceDataHandler}
      />
      {/* <FilterBlock
        title="Производитель"
        handleChange={handleBrandChange}
        checkState={brandState}
      /> */}
    </div>
  );
};

export default SearchProductsFilter;
