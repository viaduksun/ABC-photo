/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';
import styles from './Textarea.module.scss';

const Textarea = (props) => {
  const { name, label, ...rest } = props;
  const [field, meta] = useField(props);
  const textareaStyles = classNames({
    [styles.textArea]: true,
    [styles.isInvalid]: meta.touched && meta.error,
    [styles.Valid]: meta.touched && !meta.error,
  });
  return (
    <div className={styles.textareaWrapper}>
      <label className={styles.textAreaLabel} htmlFor={name}>
        {label}
      </label>
      <Field
        name={name}
        placeholder="description"
        as="textarea"
        className={textareaStyles}
      />
      <ErrorMessage
        component="div"
        name={name}
        className={styles.textAreaError}
      />
    </div>
  );
};

export default Textarea;
