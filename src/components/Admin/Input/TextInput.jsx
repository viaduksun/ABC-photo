/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classNames from 'classnames';
import styles from './TextInput.module.scss';
// import Checked from './icons/Checked';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const inputStyles = classNames({
    [styles.textInput]: true,
    [styles.isInvalid]: meta.touched && meta.error,
    [styles.Valid]: meta.touched && !meta.error,
  });
  return (
    <div className={styles.TextInputGroup}>
      <label className={styles.textInputLabel} htmlFor={field.name}>
        {label}
      </label>
      <input className={inputStyles} {...props} {...field} autoComplete="off" />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.textInputError}
      />
    </div>
  );
};

export default TextInput;
