/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.scss';
import dropdownsContent from './dropdownsContent';

const DropdownMenu = ({ handleClick, linkId }) => {
  console.log(linkId);
  const currentDropdown = dropdownsContent.find(
    (item) => item.categoryId === linkId
  );
  return (
    <div className={styles.DropMenu}>
      <ul className={styles.DropUl}>
        {currentDropdown.dropContent.map((item) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li key={item.id} className={styles.DropLink} onClick={handleClick}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
