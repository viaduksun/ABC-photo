/* eslint-disable no-debugger */
/* eslint-disable max-len */
// /* eslint-disable max-len */
// /* eslint-disable no-debugger */
// /* eslint-disable no-unused-vars */
import React from 'react';
import HeaderSlider from '../components/HeaderSlider/HeaderSlider';
import DiscountSlider from '../containers/DiscountSlider/DiscountSlider';

import PopularModelsSliderContainer from '../containers/PopularModelsSliderContainer/PopularModelsSliderContainer';

const Home = () => {
  console.log('test');

  return (
    <>
      <HeaderSlider />
      <PopularModelsSliderContainer />
      <DiscountSlider />
    </>
  );
};

export default Home;
