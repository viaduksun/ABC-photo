/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CheckBox = ({ handleChange, typeFilter }) => (
  <>
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={typeFilter.mirror}
            onChange={handleChange}
            name="mirror"
          />
        }
        label="зеркальные"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={typeFilter.compact}
            onChange={handleChange}
            name="compact"
          />
        }
        label="компактные"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={typeFilter.system}
            onChange={handleChange}
            name="system"
          />
        }
        label="системные"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={typeFilter.zoom}
            onChange={handleChange}
            name="zoom"
          />
        }
        label="суперзум"
      />
    </FormGroup>
  </>
);
export default CheckBox;
