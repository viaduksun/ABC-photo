/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './RadioInput.scss';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
// import Checked from './icons/Checked';
const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
    paddingLeft: 0,
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const RadioInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  return (
    <div className="text-input-group">
      <GreenRadio
        {...props}
        {...field}
        className={`radio-input ${meta.touched && meta.error && 'is-invalid'} ${
          meta.touched && !meta.error && 'valid'
        }`}
      />
      <label className="text-input-label" htmlFor={field.name}>
        {label}
      </label>
      {/* <input
        className={`text-input ${meta.touched && meta.error && 'is-invalid'} ${
          meta.touched && !meta.error && 'valid'
        }`}
        {...props}
        {...field}
        autoComplete="off"
      /> */}
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-input-error"
      />
      {/* {meta.touched && !meta.error && <Checked />} */}
    </div>
  );
};

export default RadioInput;
