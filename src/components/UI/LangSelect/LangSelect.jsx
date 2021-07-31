import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 70,
    height: 24,
    margin: 0,
    fontSize: 12,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    height: 20,
    padding: 3,
    fontSize: 12,
    marginTop: 4,
  },
  selectWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  label: {
    fontSize: 12,
    transform: 'translate(9px, 7px)',
  },
  menuItem: {
    fontSize: 12,
  },
}));

export default function LangSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.selectWrapper}>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          className={classes.select}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Lang"
        >
          <MenuItem value="" className={classes.menuItem}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="en" className={classes.menuItem}>
            EN
          </MenuItem>
          <MenuItem value="ua" className={classes.menuItem}>
            UA
          </MenuItem>
          <MenuItem value="ru" className={classes.menuItem}>
            RU
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
