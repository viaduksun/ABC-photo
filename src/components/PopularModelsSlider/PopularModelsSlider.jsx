import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import ProductCard from '../ProductCard/ProductCard';
import './PopularModelsSlider.scss';
import styles from './PopularModelsSlider.module.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperCarousel = () => (
  <>
    <div className={styles.PopularContainer}>
      <h1 className={styles.SliderHeader}>Популярные модели</h1>
      <div className={styles.PopularModelsSlider}>
        <Swiper
          className="swiper-container-3"
          slidesPerView={4}
          spaceBetween={55}
          autoplay={{ delay: 3000 }}
          slidesPerGroup={1}
          loop
          loopFillGroupWithBlank
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
        </Swiper>
      </div>
    </div>
  </>
);

export default SwiperCarousel;
