/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-tabs */
import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import styles from './RangeSlider.module.scss';
import { getFilteredProductsAction } from '../../../store/products/actions';

const useStyles = makeStyles({
    root: {
      background: 'white',
      color: 'green'
    },
  });

const RangeSlider = () => {
const currentCategory = useSelector(
  (state) => state.productsPage.currentCategory
);
const allProducts = useSelector((state) => state.productsPage.products);
console.log(allProducts);

// const maxPrice = allProducts.reduce((acc, curr) => (acc.currentPrice > curr.currentPrice ? acc.currentPrice : curr.currentPrice), {});
const maxPrice = allProducts.reduce((acc, curr) => {
  if (acc.currentPrice > curr.currentPrice) {
    return acc.currentPrice;
  }
  return curr.currentPrice;
}, 0);
console.log(maxPrice);
const [price, setPrice] = useState([0, 40000]);
const page = useSelector((state) => state.productsPage.currentPage);
const addQuery = `&minPrice=${price[0]}&maxPrice=${price[1]}`;

const dispatch = useDispatch();
const dispatchPriceHandler = () => {
  dispatch(getFilteredProductsAction(currentCategory, page, addQuery));
};

const rangeSelector = (event, newValue) => {
	setPrice(newValue);
};

const handleChangeMinRange = (event) => {
  setPrice([+event.target.value, +price[1]]);
};
const handleChangeMaxRange = (event) => {
  setPrice([+price[0], +event.target.value]);
};

const classes = useStyles();

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
      max={15000}
    />
  </div>
);
};

export default RangeSlider;