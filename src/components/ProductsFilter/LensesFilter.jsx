/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './ProductsFilter.module.scss';
import LensesQueryMaker from './LensesQueryMaker';
import RangeSliderContainer from './RangeSlider/RangeSliderContainer';
import FilterBlock from './FilterBlock/FilterBlock';

const LensesFilter = () => {
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
    setPriceData(priceState);
  };
  // ======================================
  const [brandType, setBrandType] = useState({
    checkboxA: {
      title: 'Canon',
      status: false,
    },
    checkboxB: {
      title: 'Nikon',
      status: false,
    },
    checkboxC: {
      title: 'Panasonic',
      status: false,
    },
    checkboxD: {
      title: 'Sony',
      status: false,
    },
  });
  const handleBrandTypeChange = (event) => {
    setBrandType({
      ...brandType,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // ======================================
  const [lenseType, setLenseType] = useState({
    checkboxA: {
      title: 'макрообъектив',
      status: false,
    },
    checkboxB: {
      title: 'портретный',
      status: false,
    },
    checkboxC: {
      title: 'рыбий глаз',
      status: false,
    },
    checkboxD: {
      title: 'сверхширокоугольный',
      status: false,
    },
  });
  const handleLenseTypeChange = (event) => {
    setLenseType({
      ...lenseType,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // ======================================
  const [bionet, setBionet] = useState({
    checkboxA: {
      title: 'Canon',
      status: false,
    },
    checkboxB: {
      title: 'Fujifilm',
      status: false,
    },
    checkboxC: {
      title: 'Nikon',
      status: false,
    },
    checkboxD: {
      title: 'Panasonic',
      status: false,
    },
  });
  const handleBionetChange = (event) => {
    setBionet({
      ...bionet,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  return (
    <div className={styles.ProductsFilter}>
      <LensesQueryMaker
        brandType={brandType}
        lenseType={lenseType}
        bionet={bionet}
        priceState={priceData}
      />
      <RangeSliderContainer
        priceState={priceState}
        rangeSelector={rangeSelector}
        handleChangeMinRange={handleChangeMinRange}
        handleChangeMaxRange={handleChangeMaxRange}
        sentPriceDataHandler={sentPriceDataHandler}
      />
      <FilterBlock
        title="Производитель"
        handleChange={handleBrandTypeChange}
        checkState={brandType}
      />
      <FilterBlock
        title="Тип объектива"
        handleChange={handleLenseTypeChange}
        checkState={lenseType}
      />
      <FilterBlock
        title="Тип байонета"
        handleChange={handleBionetChange}
        checkState={bionet}
      />
    </div>
  );
};

export default LensesFilter;
