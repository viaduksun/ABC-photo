/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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

const CheckBox = ({ handleChange, setFilter }) => (
  <>
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={setFilter.yes}
            onChange={handleChange}
            name="yes"
          />
        }
        label="с объективом"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={setFilter.no}
            onChange={handleChange}
            name="no"
          />
        }
        label="без объектива"
      />
    </FormGroup>
  </>
);
export default CheckBox;
