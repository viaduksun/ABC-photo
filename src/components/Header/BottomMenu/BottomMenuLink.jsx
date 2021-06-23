/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import styles from './BottomMenu.module.scss';

const BottomMenuLink = ({ id, path, title }) => {
  const [dropActive, setdropActive] = useState(false);

  const handleDropdown = () => {
    setdropActive(!dropActive);
  };
  return (
    <li
      key={id}
      className={styles.BottomLink}
      onMouseEnter={handleDropdown}
      onMouseLeave={handleDropdown}
      onClick={handleDropdown}
    >
      <NavLink to={path} activeClassName="selected" onClick={handleDropdown}>
        {title}
      </NavLink>
      {dropActive && <Dropdown linkId={id} handleClick={handleDropdown} />}
    </li>
  );
};

export default BottomMenuLink;
