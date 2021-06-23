import React from 'react';
import { withRouter } from 'react-router-dom';
import TopMenu from '../../components/Header/TopMenu/TopMenu';
import MiddleMenu from '../../components/Header/MiddleMenu/MiddleMenu';
import BottomMenu from '../../components/Header/BottomMenu/BottomMenu';
import styles from './Header.module.scss';

const MenuAppBar = () => (
  <div className={styles.Header}>
    <TopMenu />
    <MiddleMenu />
    <BottomMenu />
  </div>
);
export default withRouter(MenuAppBar);
