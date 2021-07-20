/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import {BsChevronRight} from 'react-icons/bs';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({data}) => {
  console.log('breadcrumbs');
  return (
    <div className={styles.Breadcrumbs}>
      <div className="container">
        {data.map((item, index, arr) => {
        if (arr.length - 1 === index) {
          return <span className={styles.Span}>{item[1]}</span>;
        }
        return (
          <>
            <span className={styles.Link}><Link to={item[0]}>{item[1]}</Link></span>
          </>
);
      })}
      </div>
   
    </div>
  );
};

export default Breadcrumbs;