/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import getFilteredProducts from '../../../api/getFilteredProducts';
// import { NavLink } from 'react-router-dom';
// import getFilteredProducts from '../../../api/getFilteredProducts';
import {
  setCurrentCategoryAction,
  setCurrentQueryAction,
} from '../../../store/products/actions';
import DropdownMenu from '../Dropdown/Dropdown';
import styles from './BottomMenu.module.scss';

const BottomMenuLink = ({ parentId, title, key, page }) => {
  const currentQuery = useSelector((state) => state.productsPage.currentQuery);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const [dropActive, setdropActive] = useState(false);
  const dispatch = useDispatch();

  // const handleDropdown = () => {
  //   setdropActive(!dropActive);
  // };
  const handleDropdownON = () => {
    setdropActive(true);
  };
  const handleDropdownOFF = () => {
    setdropActive(false);
  };
  const handleDropdownClick = (id) => {
    setdropActive(false);
    dispatch(setCurrentCategoryAction(id));
    dispatch(setCurrentQueryAction(id, perPage, page));
  };
  return (
    <li
      key={key}
      className={styles.BottomLink}
      onMouseEnter={handleDropdownON}
      onMouseLeave={handleDropdownOFF}
      // onClick={handleDropdownClick}
    >
      <div className={styles.bottomLinks}>{title}</div>
      {/* {dropActive && ( */}
      <DropdownMenu
        parentId={parentId}
        handleClick={handleDropdownClick}
        dropActive={dropActive}
        currentQuery={currentQuery}
      />
      {/* )} */}
    </li>
  );
};

BottomMenuLink.propTypes = {
  key: PropTypes.string.isRequired,
};

export default BottomMenuLink;
