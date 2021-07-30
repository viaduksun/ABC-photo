/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './FilterBlock.module.scss';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckBoxBlock = ({ handleChange, checkState }) => (
  // console.log(typeState);
  <>
    <FormGroup row className={styles.CheckboxGroup}>
      {Object.keys(checkState).map((item) => (
        <FormControlLabel
          control={
            <GreenCheckbox
              id={checkState[item].title}
              checked={checkState[item].checked}
              onChange={handleChange}
              name={item}
            />
          }
          label={checkState[item].title}
          className={styles.GreenCheckbox}
        />
      ))}
    </FormGroup>
  </>
);
export default CheckBoxBlock;
