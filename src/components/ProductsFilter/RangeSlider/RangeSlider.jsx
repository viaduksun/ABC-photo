/* eslint-disable no-tabs */
import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';
import styles from './RangeSlider.module.scss';

const useStyles = makeStyles({
    root: {
      background: 'white',
      color: 'green'
    },
  });

const RangeSlider = () => {
const [value, setValue] = useState([0, 12000]);

const rangeSelector = (event, newValue) => {
	setValue(newValue);
};

const handleChangeMinRange = (event) => {
    setValue([+event.target.value, +value[1]]);
};
const handleChangeMaxRange = (event) => {
    setValue([+value[0], +event.target.value]);
};

const classes = useStyles();

return (
  <div className={styles.RangeSlider}>
    <h3 className={styles.Title}>По цене</h3>
    <form className={styles.RangeSliderTop}>
      <input type="text" value={value[0]} onChange={handleChangeMinRange} />
      &nbsp;
      -
      &nbsp;
      <input type="text" value={value[1]} onChange={handleChangeMaxRange} />
            &nbsp;
            &nbsp;
      <button type="button" className={styles.RangeSliderButton}>OK</button>
    </form>

    <Slider
      className={classes.root}
      value={value}
      onChange={rangeSelector}
      valueLabelDisplay="auto"
      max={15000}
    />
  </div>
);
};

export default RangeSlider;