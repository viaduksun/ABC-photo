import React from 'react';
import { BiMap } from 'react-icons/bi';
import Breadcrumbs from '../../containers/Breadcrumbs/Breadcrumbs';
import styles from './Shops.module.scss';

const Shops = () => {
  const array = [['/', 'Главная'], ['shops', 'Магазины']];
  return (
    <div className={styles.ShopsWrapper}>
      <div className="container">
        <Breadcrumbs data={array} />
        <h2 className={styles.ShopsTitle}>Магазины</h2>
        <h3 className={styles.ShopsSubTitle}>
          ИНТЕРНЕТ-МАГАЗИН
        </h3>
        <hr className={styles.Line} />
        <p className={styles.ShopsWorkTime}>
          пн - пт: с
          {' '}
          <span>10:00</span>
          {' '}
          до
          {' '}
          <span>19:00</span>
        </p>
        <p className={styles.ShopsPhone}>0 800 21 21 50</p>
        <h3 className={styles.ShopsSubTitle}>КИЕВ</h3>
        <hr className={styles.Line} />
        <p className={styles.ShopsAddress}>
          ул. Б. Васильковская (Красноармейская), 132
          (Вход со двора)
        </p>
        <p className={styles.ShopsWorkTime}>
          пн - пт: с
          {' '}
          <span>10:00</span>
          {' '}
          до
          {' '}
          <span>19:00</span>
        </p>
        <p className={styles.ShopsWorkTime}>
          пн - пт: с
          {' '}
          <span>10:00</span>
          {' '}
          до
          {' '}
          <span>16:00</span>
        </p>
        <p className={styles.ShopsMap}>
          <BiMap style={{color: '#51ad33'}} />
          &nbsp;
          <a href="https://goo.gl/maps/s8vPuhV5Xax11kAf9" target="blank" className={styles.aShops}>показать на карте</a>
        </p>
        <h3 className={styles.ShopsSubTitle}>ДНЕПР</h3>
        <hr className={styles.Line} />
        <p className={styles.ShopsAddress}>
          ул. Харьковская, 7
        </p>
        <p className={styles.ShopsWorkTime}>
          пн - сб: c
          {' '}
          <span>10:00 </span>
          {' '}
          до
          {' '}
          <span>19:00</span>
        </p>
        <p className={styles.ShopsWorkTime}>
          вс: с
          {' '}
          <span>10:00 </span>
          {' '}
          до
          {' '}
          <span>18:00</span>
        </p>
        <p className={styles.ShopsMap}>
          <BiMap style={{color: '#51ad33'}} />
          &nbsp;
          <a href="https://goo.gl/maps/p8XZhdszNGRqUiPMA" target="blank" className={styles.aShops}>показать на карте</a>
        </p>
      </div>
    </div>

  );
};

export default Shops;