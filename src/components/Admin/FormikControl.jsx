/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Textarea from './Textarea/Textarea';

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <input />;
    case 'textarea':
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
