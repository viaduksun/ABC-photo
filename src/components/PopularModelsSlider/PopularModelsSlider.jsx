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
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './PopularModelsSlider.scss';
import styles from './PopularModelsSlider.module.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const PopularModelsSlider = ({popularModels}) => {
  if (!popularModels) return null;
  return (
    <>
      <div className={styles.PopularContainer}>
        <Swiper
          className="swiper-container-3"
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{
            delay: 90000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerGroup={1}
          loop
          navigation
          allowTouchMove
          mousewheel={{
            releaseOnEdges: true
          }}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            850: {
              slidesPerView: 3,
              touchRatio: 1
            },
            320: {
              slidesPerView: 2,
            },
          }}
        >
          {popularModels.map((popularCard) => (
            <SwiperSlide key={popularCard._id}>
              <ProductCard product={popularCard} />
            </SwiperSlide>
                      ))}
        </Swiper>
      </div>
    </>
  );
};

PopularModelsSlider.propTypes = {
  popularModels: PropTypes.arrayOf,

};
PopularModelsSlider.defaultProps = {
  popularModels: [],
};

export default PopularModelsSlider;
