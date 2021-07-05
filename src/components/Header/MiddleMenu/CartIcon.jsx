import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

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

export default function CartIcon() {
  const classes = useStyles();

  return (
    <Link to="/cart" className={classes.root}>
      <Avatar className={classes.grey}>
        <ShoppingCartOutlinedIcon />
      </Avatar>
      <p>Корзина</p>
    </Link>
  );
}
