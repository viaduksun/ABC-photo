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
  // console.log(props);
  const { name, label, options, handleChange, ...rest } = props;
  const [field, meta] = useField(props);
  // console.log(field);
  const selectStyles = classNames({
    [styles.selectArea]: true,
    [styles.isInvalid]: meta.touched && meta.error,
    [styles.Valid]: meta.touched && !meta.error,
  });
  // const handleOnChange = () => {
  //   console.log('Change');
  // };
  return (
    <div className={styles.selectAreaWrapper}>
      {label && (
        <label className={styles.textAreaLabel} htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        as="select"
        className={selectStyles}
        onChange={handleChange}
        {...rest}
        // {...field}
        // value={field.value}
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
