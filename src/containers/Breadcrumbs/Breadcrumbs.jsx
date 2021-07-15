import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from './Breadcrumbs.module.scss';

export default function CustomSeparator() {
  return (
    <div className={styles.Breadcrumbs}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="black" to="/">
          Главная
        </Link>
        <Link color="black" to="/products">
          Цифровая техника
        </Link>
        <Typography color="#7D7D7D"> Фотоаппараты</Typography>
      </Breadcrumbs>
    </div>
  );
}
