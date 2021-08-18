/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './ProductsFilter.module.scss';
import ActionCamerasQueryMaker from './ActionCamerasQueryMaker';
import RangeSliderContainer from './RangeSlider/RangeSliderContainer';
import FilterBlock from './FilterBlock/FilterBlock';

const ActionCamerasFilter = () => {
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
  const [matrixType, setMatrixType] = useState({
    checkboxA: {
      title: '8',
      status: false,
    },
    checkboxB: {
      title: '12',
      status: false,
    },
    checkboxC: {
      title: '23',
      status: false,
    },
  });
  const handleMatrixTypeChange = (event) => {
    setMatrixType({
      ...matrixType,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // ======================================
  const [features, setFeatures] = useState({
    checkboxA: {
      title: 'HDR',
      status: false,
    },
    checkboxB: {
      title: 'WDR',
      status: false,
    },
    checkboxC: {
      title: 'быстрая зарядка',
      status: false,
    },
    checkboxD: {
      title: 'голосовое управление',
      status: false,
    },
  });
  const handleFeaturesChange = (event) => {
    setFeatures({
      ...features,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // ======================================
  const [wireless, setWireless] = useState({
    checkboxA: {
      title: 'Bluetooth',
      status: false,
    },
    checkboxB: {
      title: 'GPS',
      status: false,
    },
    checkboxC: {
      title: 'Wi-Fi',
      status: false,
    },
  });
  const handleWirelessChange = (event) => {
    setWireless({
      ...wireless,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  return (
    <div className={styles.ProductsFilter}>
      <ActionCamerasQueryMaker
        matrixType={matrixType}
        features={features}
        wireless={wireless}
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
        title="Разрешение матрицы"
        handleChange={handleMatrixTypeChange}
        checkState={matrixType}
      />
      <FilterBlock
        title="Особенности"
        handleChange={handleFeaturesChange}
        checkState={features}
      />
      <FilterBlock
        title="Беспроводные коммуникации"
        handleChange={handleWirelessChange}
        checkState={wireless}
      />
    </div>
  );
};

export default ActionCamerasFilter;
