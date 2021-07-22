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
import FilterBlock from './FilterBlock/FilterBlock';

const PhotoCamerasFilter = () => {
  const [typeFilter, setTypeFilter] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  const [brandFilter, setBrandFilter] = useState({
    canon: false,
    nikon: false,
    sony: false,
    olympus: false,
    fuji: false,
  });
  const [setFilter, setSetFilter] = useState({
    yes: false,
    no: false,
  });
  const [matrixSizeFilter, setMatrixSizeFilter] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
  });
  // =============================
  const [setState, setSetState] = useState({
    checkboxA: {
      title: 'с объективом',
      status: false,
    },
    checkboxB: {
      title: 'без объектива',
      status: false,
    },
  });

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
  const [typeState, setTypeState] = useState({
    checkboxA: {
      title: 'зеркальные',
      status: false,
    },
    checkboxB: {
      title: 'компактные',
      status: false,
    },
    checkboxC: {
      title: 'системные',
      status: false,
    },
    checkboxD: {
      title: 'суперзум',
      status: false,
    },
  });
  const [matrixState, setMatrixState] = useState({
    checkboxA: {
      title: '1` (13.2 х 8.8 мм)',
      status: false,
    },
    checkboxB: {
      title: '1/2.3` (6.2 х 4.6 мм)',
      status: false,
    },
    checkboxC: {
      title: '1/3` (4.52 х 3.39 мм)',
      status: false,
    },
    checkboxD: {
      title: 'APS-C (22.3 х 14.8 мм)',
      status: false,
    },
    checkboxE: {
      title: 'APS-C (23.5 х 15.7 мм)',
      status: false,
    },
    checkboxF: {
      title: 'Full Frame (36 х 24 мм)',
      status: false,
    },
  });
  const handleTypeChange = (event) => {
    setTypeState({
      ...typeState,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  const handleBrandChange = (event) => {
    setBrandState({
      ...brandState,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  const handleSetChange = (event) => {
    setSetState({
      ...setState,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  const handleMatrixSizeChange = (event) => {
    setMatrixState({
      ...matrixState,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // const handleBrandChange = (event) => {

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
      <FilterQueryMaker
        typeState={typeState}
        brandState={brandState}
        brandFilter={brandFilter}
        setFilter={setFilter}
        matrixSizeFilter={matrixSizeFilter}
      />
      <RangeSliderContainer />
      <FilterBlock
        title="Тип фотоаппарата"
        handleChange={handleTypeChange}
        checkState={typeState}
      />
      <FilterBlock
        title="Производитель"
        handleChange={handleBrandChange}
        checkState={brandState}
      />
      <FilterBlock
        title="Комплектация"
        handleChange={handleSetChange}
        checkState={setState}
      />
      <FilterBlock
        title="Размер матрицы"
        handleChange={handleMatrixSizeChange}
        checkState={matrixState}
      />
      {/* <Producer handleChange={handleBrandChange} brandFilter={brandFilter} /> */}
      {/* <Equipment handleChange={handleSetChange} setFilter={setFilter} /> */}
      {/* <Matrix
        handleChange={handleMatrixSizeChange}
        matrixSizeFilter={matrixSizeFilter}
      /> */}
    </div>
  );
};

export default PhotoCamerasFilter;
