import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper/core';
import sliderImg from '../../../assets/img/discountSliderComponent/slider-img.png';

import './SwiperCarousel.scss';

  SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperCarousel = () => (
  <>
    <Swiper slidesPerView={1} spaceBetween={0} autoplay={{delay: 3000}} slidesPerGroup={1} loop loopFillGroupWithBlank navigation className="mySwiper">
      <SwiperSlide>
        <img src={sliderImg} alt={sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg} alt={sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg} alt={sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg} alt={sliderImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImg} alt={sliderImg} />
      </SwiperSlide>
    </Swiper>
  </>
  );

export default SwiperCarousel;