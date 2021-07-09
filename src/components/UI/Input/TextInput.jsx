/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './TextInput.scss';
// import Checked from './icons/Checked';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="text-input-group">
      <label className="text-input-label" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`text-input ${meta.touched && meta.error && 'is-invalid'} ${
          meta.touched && !meta.error && 'valid'
        }`}
        {...props}
        {...field}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-input-error"
      />
      {/* {meta.touched && !meta.error && <Checked />} */}
    </div>
  );
};

export default TextInput;
