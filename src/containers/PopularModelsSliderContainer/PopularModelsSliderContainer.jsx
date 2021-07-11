/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopularModelsSlider from '../../components/PopularModelsSlider/PopularModelsSlider';
import { axiosPopularModels } from '../../store/popularModels/actions';
import styles from './PopularModelsSliderContainer.module.scss';
import Loader from '../../components/UI/Loader/Loader';

const PopularModelsSliderContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosPopularModels());
  }, [dispatch]);
  const popularModels = useSelector((state) => state.popularModelsPage.popularModels.products);
    return (
      <div className={styles.PopularModelsSliderContainer}>
        <div className="container">
          <h1 className={styles.SliderTitle}>Популярные модели</h1>
          {!popularModels ? <div className={styles.Loader}><Loader /></div> : <PopularModelsSlider popularModels={popularModels} />}
        </div>
      </div>
    
    );
};

export default PopularModelsSliderContainer;