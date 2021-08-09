/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-tabs */
import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Button from '../../UI/Button/Button';
import styles from './RangeSlider.module.scss';
import { getFilteredProductsAction } from '../../../store/products/actions';

const useStyles = makeStyles({
  root: {
    background: 'white',
    color: '#51ad33',
  },
});

const RangeSlider = ({
  maxPrice,
  minPrice,
  rangeSelector,
  handleChangeMinRange,
  handleChangeMaxRange,
  sentPriceDataHandler,
  priceState,
}) => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const dispatchPriceHandler = () => {
  //   dispatch(getFilteredProductsAction(currentCategory, page, addQuery));
  // };

  return (
    <div className={styles.RangeSlider}>
      <h3 className={styles.Title}>По цене</h3>
      <form className={styles.RangeSliderTop}>
        <input
          type="text"
          value={priceState[0]}
          onChange={handleChangeMinRange}
        />
        &nbsp; <span className={styles.RangeSliderDash}>-</span> &nbsp;
        <input
          type="text"
          value={priceState[1]}
          onChange={handleChangeMaxRange}
        />
        &nbsp; &nbsp;
        <Button
          addClass="filter-price-confirm"
          onClick={sentPriceDataHandler}
        >
          Ok
        </Button>
      </form>

      <Slider
        className={classes.root}
        value={priceState}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
        max={maxPrice}
        min={minPrice}
      />
    </div>
  );
};

export default RangeSlider;
