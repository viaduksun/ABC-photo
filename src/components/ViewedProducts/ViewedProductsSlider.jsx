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
import './ViewedProductsSlider.scss';
import styles from './ViewedProductsSlider.module.scss';
import ProductCard from '../ProductCard/ProductCard';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const ViewedProductsSlider = ({ viewedProducts }) => {
  if (!viewedProducts) return null;
  return (
    <>
      <div className={styles.Container}>
        <Swiper
          className="ViewedProductsSlider"
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerGroup={1}
          loop
          navigation
          allowTouchMove
          mousewheel={{
            releaseOnEdges: true,
          }}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3,
              touchRatio: 1,
            },
            600: {
              slidesPerView: 2,
            },
          }}
        >
          {viewedProducts.map((viewedProduct) => (
            <SwiperSlide key={viewedProduct._id}>
              <ProductCard product={viewedProduct} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ViewedProductsSlider;
