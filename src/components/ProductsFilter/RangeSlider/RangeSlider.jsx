/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-tabs */
import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './RangeSlider.module.scss';
import { getFilteredProductsAction } from '../../../store/products/actions';

const useStyles = makeStyles({
    root: {
      background: 'white',
      color: 'green'
    },
  });

const RangeSlider = ({
currentCategory,
page,
maxPrice,
minPrice,
rangeSelector,
handleChangeMinRange,
handleChangeMaxRange,
addQuery,
price
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dispatchPriceHandler = () => {
    dispatch(getFilteredProductsAction(currentCategory, page, addQuery));
  };

return (
  <div className={styles.RangeSlider}>
    <h3 className={styles.Title}>По цене</h3>
    <form className={styles.RangeSliderTop}>
      <input type="text" value={price[0]} onChange={handleChangeMinRange} />
      &nbsp;
      -
      &nbsp;
      <input type="text" value={price[1]} onChange={handleChangeMaxRange} />
            &nbsp;
            &nbsp;
      <button type="button" className={styles.RangeSliderButton} onClick={dispatchPriceHandler}>OK</button>
    </form>

    <Slider
      className={classes.root}
      value={price}
      onChange={rangeSelector}
      valueLabelDisplay="auto"
      max={maxPrice}
      min={minPrice}
    />
  </div>
);
};

export default RangeSlider;