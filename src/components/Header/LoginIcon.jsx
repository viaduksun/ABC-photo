import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      color: theme.palette.grey[600],
    },
  },
  grey: {
    width: 36,
    height: 36,
    color: '#fff',
    backgroundColor: theme.palette.grey[300],
  },
}));

export default function LoginIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.grey}>
        <AccountCircleOutlinedIcon />
      </Avatar>
      <p>Вход</p>
    </div>
  );
}
