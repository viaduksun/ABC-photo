/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Select from './Select/Select';
import SelectSmall from './SelectSmall/SelectSmall';
import Textarea from './Textarea/Textarea';

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <input />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'selectSmall':
      return <SelectSmall {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
