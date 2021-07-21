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

const CheckBox = ({ handleChange, brandFilter }) => (
  // const [state, setState] = React.useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedC: true,
  //   checkedD: false,
  //   checkedE: false,
  //   checkedF: false,
  //   checkedG: false
  // });
  // canon: false,
  //   nikon: false,
  //   sony: false,
  //   olympus: false,
  //   fuji: false,
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  <>
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={brandFilter.canon}
            onChange={handleChange}
            name="canon"
          />
        }
        label="Canon"
      />

      <FormControlLabel
        control={
          <GreenCheckbox
            checked={brandFilter.nikon}
            onChange={handleChange}
            name="nikon"
          />
        }
        label="Nikon"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={brandFilter.fuji}
            onChange={handleChange}
            name="fuji"
          />
        }
        label="Fujifilm"
      />

      <FormControlLabel
        control={
          <GreenCheckbox
            checked={brandFilter.olympus}
            onChange={handleChange}
            name="olympus"
          />
        }
        label="Olympus"
      />

      <FormControlLabel
        control={
          <GreenCheckbox
            checked={brandFilter.sony}
            onChange={handleChange}
            name="sony"
          />
        }
        label="Sony"
      />
    </FormGroup>
  </>
);
export default CheckBox;
