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

const CheckBox = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <FormGroup row>
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label="CMOS"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
          label="кропнутая"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
          label="полноразмерная"
        />
      </FormGroup>
    </>
  );
};

export default CheckBox;
