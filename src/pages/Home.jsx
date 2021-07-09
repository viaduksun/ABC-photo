/* eslint-disable max-len */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderSlider from '../components/HeaderSlider/HeaderSlider';
import PopularModelsSlider from '../components/PopularModelsSlider/PopularModelsSlider';
import DiscountSlider from '../containers/DiscountSlider/DiscountSlider';
import { axiosPopularModels } from '../store/popularModels/actions';

const Home = () => {
  console.log('test');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosPopularModels());
  }, [dispatch]);

  const popularModels = useSelector((state) => state.popularModelsPage.popularModels);
  const isLoadingPopularModels = useSelector((state) => state.popularModelsPage.isLoadingPopularModels);
  return (
    <>
      <HeaderSlider />
      <PopularModelsSlider popularModels={popularModels} />
      <DiscountSlider />
    </>
  );
};

export default Home;
