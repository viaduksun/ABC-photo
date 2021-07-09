/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
// /* eslint-disable no-debugger */
// /* eslint-disable no-underscore-dangle */
// /* eslint-disable react/prop-types */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import ProductCard from '../ProductCard/ProductCard';
import './PopularModelsSlider.scss';
import styles from './PopularModelsSlider.module.scss';
// import Loader from '../UI/Loader/Loader';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperCarousel = ({popularModels}) => {
  if (!popularModels) return null;
  return (
    <>
      <div className={styles.PopularContainer}>
        <h1 className={styles.SliderTitle}>Популярные модели</h1>
        <div className={styles.PopularModelsSlider}>
          <Swiper
            className="swiper-container-3"
            slidesPerView={4}
            spaceBetween={55}
            autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
            slidesPerGroup={1}
            loop
            loopFillGroupWithBlank
            navigation
            allowTouchMove={false}
          >
            {popularModels.map((popularCard) => (
              <SwiperSlide key={popularCard._id}>
                <ProductCard product={popularCard} />
              </SwiperSlide>
                      ))}
          </Swiper>
        </div>
                
      </div>
    </>
  );
};

export default SwiperCarousel;
