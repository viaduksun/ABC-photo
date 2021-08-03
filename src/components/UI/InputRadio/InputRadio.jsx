/* eslint-disable react/prop-types */
import React from 'react';
import styles from './InputRadio.module.scss';

const InputRadio = ({
onChange, currentId, id, name, label,
}) => (
  <div className={styles.radioWrapper}>
    <input
      className={styles.radioInput}
      onChange={() => onChange(id)}
      checked={id === currentId}
      type="radio"
      id={id}
      name={name}
    />
    <label className={styles.radioLabel} htmlFor={id}>{label}</label>
  </div>
    );
export default InputRadio;
