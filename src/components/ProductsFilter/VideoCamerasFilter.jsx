/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './ProductsFilter.module.scss';
import VideoCamerasQueryMaker from './VideoCamerasQueryMaker';
import RangeSliderContainer from './RangeSlider/RangeSliderContainer';
import FilterBlock from './FilterBlock/FilterBlock';

const VideoCamerasFilter = () => {
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
  const [lenseType, setLenseType] = useState({
    checkboxA: {
      title: 'Leica Dicomar',
      status: false,
    },
    checkboxB: {
      title: 'G Lens HXR-MC2500',
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
  const [fileFormat, setFileFormat] = useState({
    checkboxA: {
      title: 'AVCHD',
      status: false,
    },
    checkboxB: {
      title: 'MOV',
      status: false,
    },
    checkboxC: {
      title: 'MP4',
      status: false,
    },
  });
  const handleFileFormatChange = (event) => {
    setFileFormat({
      ...fileFormat,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  // ======================================
  const [connectors, setConnectors] = useState({
    checkboxA: {
      title: 'HDMI',
      status: false,
    },
    checkboxB: {
      title: 'USB',
      status: false,
    },
    checkboxC: {
      title: 'MICRO',
      status: false,
    },
  });
  const handleConnectorsChange = (event) => {
    setConnectors({
      ...connectors,
      [event.target.name]: {
        title: event.target.id,
        status: event.target.checked,
      },
    });
  };
  return (
    <div className={styles.ProductsFilter}>
      {/* <FilterQueryMaker
        typeState={typeState}
        brandState={brandState}
        setFilter={setState}
        matrixState={matrixState}
        priceState={priceData}
      /> */}
      <VideoCamerasQueryMaker
        priceState={priceData}
        lenseType={lenseType}
        fileFormat={fileFormat}
        connectors={connectors}
      />
      <RangeSliderContainer
        priceState={priceState}
        rangeSelector={rangeSelector}
        handleChangeMinRange={handleChangeMinRange}
        handleChangeMaxRange={handleChangeMaxRange}
        sentPriceDataHandler={sentPriceDataHandler}
      />
      <FilterBlock
        title="Тип бъектива"
        handleChange={handleLenseTypeChange}
        checkState={lenseType}
      />
      <FilterBlock
        title="Формат видеофайлов"
        handleChange={handleFileFormatChange}
        checkState={fileFormat}
      />
      <FilterBlock
        title="Разъёмы"
        handleChange={handleConnectorsChange}
        checkState={connectors}
      />
    </div>
  );
};

export default VideoCamerasFilter;
