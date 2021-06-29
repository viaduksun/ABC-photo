import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import styles from './PopularModelsSlider.module.scss';
import ProductCard from '../ProductCard/ProductCard';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './PopularModelsSlider.scss';

SwiperCore.use([Pagination, Navigation]);

const PopularModelsSlider = () => (
  <div className={styles.PopularContainer}>
    <h1 className={styles.SliderHeader}>Популярные модели</h1>
    <div className={styles.PopularModelsSlider}>
      <Swiper
        className="swiper-container-3"
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={1}
        loop
        loopFillGroupWithBlank
        pagination={false}
        navigation
      >
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);

export default PopularModelsSlider;
