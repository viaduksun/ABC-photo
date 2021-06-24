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
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <FormGroup row>
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label="Canon"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
          label="Fujifilm"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
          label="Nikon"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
          label="Olympus"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
          label="Panasonic"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
          label="Pentax"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          label="Sony"
        />
      </FormGroup>
    </>
  );
};

export default CheckBox;
