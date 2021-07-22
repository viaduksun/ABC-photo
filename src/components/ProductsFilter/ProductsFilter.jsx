/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Equipment from './Equipment/Equipment';
import Matrix from './Matrix/Matrix';
import Producer from './Producer/Producer';
import Type from './Type/Type';
import styles from './ProductsFilter.module.scss';
import FilterQueryMaker from './FilterQueryMaker';
import RangeSliderContainer from './RangeSlider/RangeSliderContainer';

const ProductsFilter = () => {
  console.log('PRODUCTS FILTER');
  // const [typeFilter, setTypeFilter] = useState({
  //   mirror: false,
  //   compact: false,
  //   system: false,
  //   zoom: false,
  // });
  // const [brandFilter, setBrandFilter] = useState({
  //   canon: false,
  //   nikon: false,
  //   sony: false,
  //   olympus: false,
  //   fuji: false,
  // });
  // const [setFilter, setSetFilter] = useState({
  //   yes: false,
  //   no: false,
  // });
  // const [matrixSizeFilter, setMatrixSizeFilter] = useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedC: false,
  //   checkedD: false,
  //   checkedE: false,
  //   checkedF: false,
  // });
  // const handleChange = (event) => {
  //   console.log('CLICK!!!', event.target.name);
  //   setTypeFilter({ ...typeFilter, [event.target.name]: event.target.checked });
  // };
  // const handleBrandChange = (event) => {
  //   console.log('BRAND!!!', event.target.name);
  //   setBrandFilter({
  //     ...brandFilter,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  // const handleSetChange = (event) => {
  //   setSetFilter({
  //     ...setFilter,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  // const handleMatrixSizeChange = (event) => {
  //   setMatrixSizeFilter({
  //     ...matrixSizeFilter,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  return (
    <div className={styles.ProductsFilter}>
      <h1>PRODUCTS FILTER</h1>
      {/* <FilterQueryMaker
        typeFilter={typeFilter}
        brandFilter={brandFilter}
        setFilter={setFilter}
        matrixSizeFilter={matrixSizeFilter}
      />
      <RangeSliderContainer />
      <Type handleChange={handleChange} typeFilter={typeFilter} />
      <Producer handleChange={handleBrandChange} brandFilter={brandFilter} />
      <Equipment handleChange={handleSetChange} setFilter={setFilter} />
      <Matrix
        handleChange={handleMatrixSizeChange}
        matrixSizeFilter={matrixSizeFilter}
      /> */}
    </div>
  );
};

export default ProductsFilter;
