/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Dropdown.module.scss';

const DropdownMenu = ({ handleClick, parentId }) => {
  console.log(parentId);
  const catalog = useSelector((state) => state.admin.catalog);
  const currentQuery = useSelector((state) => state.productsPage.currentQuery);

  const currentDropdownArr = catalog.filter(
    (item) => item.parentId === parentId
  );
  // console.log(currentDropdownArr);
  const dropWrapperClass = classNames({
    [styles.DropMenuWrapper]: true,
    // [styles.DropMenuWrapper_active]: dropActive,
  });
  const dropClass = classNames({
    [styles.DropMenu]: true,
    // [styles.DropMenu_active]: dropActive,
  });
  return (
    <div className={dropWrapperClass}>
      <div className={dropClass}>
        <ul className={styles.DropUl}>
          {currentDropdownArr.map((item) => (
            <li
              key={item.id}
              className={styles.DropLink}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <Link
                // to={item.path + currentQuery}
                // to={item.path}
                to={`/products/filter?category=${item.id}&perPage=6&startPage=1`}
                className={styles.DropLinkText}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
