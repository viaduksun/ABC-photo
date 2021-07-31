/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Select from './Select/Select';

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <input />;

    case 'select':
      return <Select {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
