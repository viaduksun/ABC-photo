/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './HeaderSlider.module.scss';

const HeaderSlider = () => {
  // eslint-disable-next-line no-unused-vars
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [position, setPosition] = useState(0);
  const items = [1, 2, 3, 4];
  const slider = useRef(null);
  let currentPosition = 0;
  const nextHandler = () => {
    if (currentPosition > -100 * (items.length - 1)) {
      console.log('NEXT');
      console.log('CUR-next', currentPosition);

      currentPosition -= 100;

      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(${currentPosition}%)`;
      });
      setCurrentSlide(currentSlide + 1);
    } else {
      console.log('NEXT THE END');
    }
  };
  const prevHandler = () => {
    if (currentPosition < 0) {
      console.log('PREV');
      currentPosition += 100;
      slider.current.childNodes.forEach((element) => {
        element.style = `transform: translateX(${currentPosition}%)`;
      });
    } else {
      console.log('PREV the END');

      console.log(currentPosition);
    }
  };

  const btnPrevClass = classNames(
    styles.slider__button,
    styles.slider__button_prev,
    { [styles.slider__button_prev_disabled]: prevBtnDisabled }
  );
  const btnNextClass = classNames(
    styles.slider__button,
    styles.slider__button_next,
    { [styles.slider__button_next_disabled]: nextBtnDisabled }
  );

  return (
    <div className={styles.HeaderSlider}>
      <div className={styles.slider} ref={slider}>
        {items.map((item, index) => (
          <div className={styles.slider__item} key={index}>
            <img src="./img/1q.jpg" alt="img" />
          </div>
        ))}
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
