/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAuthorizationPopupAction } from '../../../store/madals/actions';
import './AuthorizationPopup.scss';

// eslint-disable-next-line react/prop-types
const AuthorizationPopup = ({children}) => {
  const dispatch = useDispatch();
  const authorizationPopupIsOpen = useSelector((state) => state.modals.authorizationPopupIsOpen);
  const closeModalHandler = () => {
    dispatch(hideAuthorizationPopupAction());
  };
  return (
    <div className={`AuthorizationPopup  ${authorizationPopupIsOpen ? 'AuthorizationPopup_IsOpen' : ''}`}>
      {children}
      <div className="AuthorizationPopupButton">
        <button
          onClick={closeModalHandler}
          type="button"
        >ок
        </button>
      </div>
      
    </div>
  );
};

export default AuthorizationPopup;
