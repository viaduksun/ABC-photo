/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.scss';
import dropdownsContent from '../../../Data/dropdownsContent';

const DropdownMenu = ({ handleClick, linkId }) => {
  const currentDropdown = dropdownsContent.find(
    (item) => item.categoryId === linkId
  );
<<<<<<< HEAD
=======
  const dropWrapperClass = classNames({
    [styles.DropMenuWrapper]: true,
    // [styles.DropMenuWrapper_active]: dropActive,
  });
  const dropClass = classNames({
    [styles.DropMenu]: true,
    // [styles.DropMenu_active]: dropActive,
  });
>>>>>>> 6c19801200032bc66af4012872bdcd5ba9afbf1a
  return (
    <div className={dropWrapperClass}>
      <div className={dropClass}>
        <ul className={styles.DropUl}>
          {currentDropdown.dropContent.map((item) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li key={item.id} className={styles.DropLink} onClick={handleClick}>
              <Link to={item.path} className={styles.DropLinkText}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
