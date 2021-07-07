/* eslint-disable no-unused-vars */
import React from 'react';
// import { useDispatch } from 'react-redux';
import HeaderSlider from '../components/HeaderSlider/HeaderSlider';
import PopularModelsSlider from '../components/PopularModelsSlider/PopularModelsSlider';
import DiscountSlider from '../containers/DiscountSlider/DiscountSlider';
// import { axiosProducts } from '../store/products/actions';

const Home = () => (
  <>
    <HeaderSlider />
    <PopularModelsSlider />
    <DiscountSlider />
  </>
);
export default Home;
