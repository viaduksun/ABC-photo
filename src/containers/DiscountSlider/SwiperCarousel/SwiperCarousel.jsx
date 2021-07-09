import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import sliderImg from '../../../assets/img/discountSliderComponent/slider-img.png';
import styles from './SwiperCarousel.module.scss';

import './SwiperCarousel.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperCarousel = () => (
  <>
    <Swiper
      className="swiper-container-1"
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      slidesPerGroup={1}
      loop
      loopFillGroupWithBlank
      navigation
    >
      <SwiperSlide>
        <div className={styles.SwiperCarousel}>
          <div className={styles.SwiperCarouselImgBlock}>
            <img src={sliderImg} alt={sliderImg} />
            <h3 className={styles.SwiperCarouselImgBlockTitle}>Canon</h3>
          </div>
          <div className={styles.SwiperCarouselContentBlock}>
            <h3>
              Canon EOS 5D Mark IV &nbsp;
              <span>Kit 24-70 f/4L IS USM</span>
            </h3>
            <div className={styles.SwiperCarouselContentBlockDiscountPrice}>
              <p>
                118 161
                <span>грн</span>
              </p>
            </div>
            <div className={styles.SwiperCarouselContentBlockPrice}>
              <p>
                72 299
                <span>грн</span>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
);

export default SwiperCarousel;
