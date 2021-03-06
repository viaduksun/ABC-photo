/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HeaderSlider.module.scss';
import sliderData from '../../Data/headerSliderData';
// Import Swiper React components

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './HeaderSlider.scss';

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Navigation]);

const HeaderSlider = () => {
  // eslint-disable-next-line no-unused-vars

  const btnPrevClass = classNames(
    styles.slider__button,
    styles.slider__button_prev
  );
  const btnNextClass = classNames(
    styles.slider__button,
    styles.slider__button_next
  );
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div className="header-slider-wrapper">
      <Swiper
        className="swiper-container-2"
        navigation
        pagination={{
          clickable: true,
        }}
        id="headerSlider"
        spaceBetween={0}
        loop
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
      >
        <div className={styles.slider}>
          {sliderData.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.alt} />
              <div className={styles.slideContent}>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <div className={styles.contentImg}>
                  <img src={slide.logo} alt={slide.alt} id="content_img" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
