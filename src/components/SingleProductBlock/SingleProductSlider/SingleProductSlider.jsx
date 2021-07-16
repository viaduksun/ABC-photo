/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import './SingleProductSlider.scss';
import SwiperCore, {
  Navigation, Thumbs
} from 'swiper/core';
import { useSelector } from 'react-redux';
import styles from './SingleProductSlider.module.scss';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const SingleProductSlider = ({singleProduct}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="container">
      <div className={styles.SingleProductSlider}>
        <Swiper
          style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}}
          loop
          spaceBetween={0}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="swiper-container-4"
          allowTouchMove={false}
        >
          <SwiperSlide><img src={singleProduct.imageUrls[0]} /></SwiperSlide>
          <SwiperSlide><img src={singleProduct.imageUrls[1]} /></SwiperSlide>
          <SwiperSlide><img src={singleProduct.imageUrls[2]} /></SwiperSlide>
          <SwiperSlide><img src={singleProduct.imageUrls[3]} /></SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={0}
          slidesPerView={4}
          freeMode
          watchSlidesVisibility
          watchSlidesProgress
          className="swiper-container-5"
          fadeEffect
        >
          <SwiperSlide><img src={singleProduct.imageUrls[0]} /></SwiperSlide>
          <SwiperSlide><img src={singleProduct.imageUrls[1]} /></SwiperSlide>
          <SwiperSlide><img src={singleProduct.imageUrls[2]} /></SwiperSlide>
          <SwiperSlide><img src={singleProduct.imageUrls[3]} /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SingleProductSlider;