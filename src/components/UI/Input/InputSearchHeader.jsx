import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
      flexGrow: 1,
    },
    inputWrapper: {
      flexGrow: 1,
    },
    input: {
      height: 30,
      backgroundColor: theme.palette.grey[200],
    },
  },
}));

export default function InputSearch() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.inputWrapper}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          className={classes.input}
        />
      </div>
    </form>
  );
}
