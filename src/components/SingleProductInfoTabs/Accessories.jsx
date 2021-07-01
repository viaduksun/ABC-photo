/* eslint-disable no-unused-vars */
import React from 'react';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard/ProductCard';
import useWindowDimensions from './useWindowDimensions';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './sliderStyles.scss';
import styles from './SingleProductInfoTabs.module.scss';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Accessories = () => {
  const slidersArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const { width } = useWindowDimensions();

  return (
    <div className={styles.AccessoriesSliderWrapp}>
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation
        className="accessories-Slider"
        id="accessories"
      >
        {slidersArr.map((item) => (
          <SwiperSlide key={item} id="accessoriesSlide">
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Accessories;
