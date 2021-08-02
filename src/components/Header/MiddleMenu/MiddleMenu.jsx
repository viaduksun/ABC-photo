/* eslint-disable no-unused-vars */
import React from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LinkIconsBlock from './LinkIconsBlock';
import SearchForm from '../SearchForm/SearchForm';
import styles from './MiddleMenu.module.scss';
import PhoneDropdown from '../PhoneDropdown/PhoneDropdown';
import LoginModal from '../../LoginModal/LoginModal';

const MiddleMenu = () => {
  const isLoginModalOpen = useSelector(
    (state) => state.modals.isLoginModalOpen
  );
  return (
    <>
      <div className={styles.mainHeader}>
        <div className="container">
          <div className={styles.HeaderWrapper}>
            <NavLink exact to="/" className={styles.Logo}>
              <Image
                cloudName="finalprojectfe242021"
                publicId="https://res.cloudinary.com/finalprojectfe242021/image/upload/v1627907997/OnlineStore/Static/logo_small_b6fsrn.png"
              />
              {/* <img src="img/logo_small.png" alt="logo" /> */}
            </NavLink>
            <SearchForm />
            <PhoneDropdown />
            <LinkIconsBlock />
          </div>
        </div>
      </div>
      {isLoginModalOpen && <LoginModal />}
    </>
  );
};

export default MiddleMenu;
