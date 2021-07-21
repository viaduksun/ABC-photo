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

const CheckBox = ({ handleChange, matrixSizeFilter }) => (
  // const [state, setState] = React.useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedC: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  <>
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={matrixSizeFilter.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="1` (13.2 х 8.8 мм)"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={matrixSizeFilter.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="1/2.3` (6.2 х 4.6 мм)"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={matrixSizeFilter.checkedC}
            onChange={handleChange}
            name="checkedC"
          />
        }
        label="1/3` (4.52 х 3.39 мм)"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={matrixSizeFilter.checkedD}
            onChange={handleChange}
            name="checkedD"
          />
        }
        label="APS-C (22.3 х 14.8 мм)"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={matrixSizeFilter.checkedE}
            onChange={handleChange}
            name="checkedE"
          />
        }
        label="APS-C (23.5 х 15.7 мм)"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={matrixSizeFilter.checkedF}
            onChange={handleChange}
            name="checkedF"
          />
        }
        label="Full Frame (36 х 24 мм)"
      />
    </FormGroup>
  </>
);
export default CheckBox;
