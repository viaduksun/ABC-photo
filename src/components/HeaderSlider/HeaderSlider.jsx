/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './HeaderSlider.module.scss';
import sliderData from './sliderData';

const HeaderSlider = () => {
  // eslint-disable-next-line no-unused-vars
  const { length } = sliderData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    const autoNextSlide = () => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    };
    const autoStide = setTimeout(autoNextSlide, 3000);
    return () => {
      if (autoStide) {
        clearTimeout(timeout.currentSlide);
      }
    };
  }, [currentSlide, length]);

  const nextHandler = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevHandler = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

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
    <div className={styles.HeaderSlider}>
      <div className={styles.slider}>
        {sliderData.map((slide, index) => (
          <div
            className={classNames({
              [styles.slide]: true,
              [styles.slide_active]: currentSlide === index,
            })}
            key={slide.id}
          >
            <img src={slide.image} alt={slide.alt} />
            <div className={styles.slideContent}>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <img src={slide.logo} alt={slide.alt} />
            </div>
          </div>
        ))}
        <div className={styles.pagination}>
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className={classNames({
                [styles.pagination_item]: true,
                [styles.pagination_item_active]: currentSlide === index,
              })}
            />
          ))}
        </div>
      </div>
      <button type="button" className={btnPrevClass} onClick={prevHandler}>
        {'<'}
      </button>
      <button type="button" className={btnNextClass} onClick={nextHandler}>
        {'>'}
      </button>
    </div>
  );
};

export default HeaderSlider;
