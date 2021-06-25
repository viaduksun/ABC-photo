import React from 'react';
import HeaderSlider from '../components/HeaderSlider/HeaderSlider';
import PopularModelsSlider from '../containers/PopularModelsSlider/PopularModelsSlider';
import DiscountSlider from '../containers/DiscountSlider/DiscountSlider';

const Home = () => (
  <>
    <HeaderSlider />
    <PopularModelsSlider />
    <DiscountSlider />
  </>
);

export default Home;
