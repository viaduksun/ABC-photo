import React from 'react';
import Carousel from 'react-grid-carousel';
import styles from './PopularModelsSlider.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

const PopularModelsSlider = () => (
  <div className="container">
    <h1 className={styles.SliderHeader}>Популярные модели</h1>
    <div className={styles.PopularModelsSlider}>
      <Carousel
        className={styles.SecondCarousel}
        cols={4}
        rows={1}
        gap={20}
        loop
        scrollSnap
        showDots
      >
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
        <Carousel.Item>
          <ProductCard />
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default PopularModelsSlider;
