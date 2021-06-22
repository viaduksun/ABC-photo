import React from 'react';
import styles from './BottomMenu.module.scss';
import MenuItems from './ButtomMenuItems';
import BottomMenuLink from './BottomMenuLink';

const BottomMenu = () => (
  <div className={styles.BottomMenu}>
    <div className="container">
      <div className="BottomMenuWrapp">
        <ul className={styles.BottomUl}>
          {MenuItems.map((item) => (
            <BottomMenuLink id={item.id} path={item.path} title={item.title} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default BottomMenu;
