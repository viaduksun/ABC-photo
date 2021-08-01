/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './RadioInput.scss';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { FormControlLabel } from '@material-ui/core';
// import Checked from './icons/Checked';
// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//     paddingLeft: 0,
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);

const RadioInput2 = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  // console.log(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default RadioInput2;
