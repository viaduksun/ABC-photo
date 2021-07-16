/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';
import styles from './Select.module.scss';

const Select = (props) => {
  const { name, label, options, ...rest } = props;
  const [field, meta] = useField(props);
  const selectStyles = classNames({
    [styles.selectArea]: true,
    [styles.isInvalid]: meta.touched && meta.error,
    [styles.Valid]: meta.touched && !meta.error,
  });

  return (
    <div className={styles.selectAreaWrapper}>
      <label className={styles.textAreaLabel} htmlFor={name}>
        {label}
      </label>
      <Field
        name={name}
        placeholder="Select..."
        as="select"
        className={selectStyles}
      >
        {options}
      </Field>
      <ErrorMessage
        component="div"
        name={name}
        className={styles.textAreaError}
      />
    </div>
  );
};

export default Select;
