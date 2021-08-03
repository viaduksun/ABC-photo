/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './CartPopup.scss';

const CartPopup = () => {
  const popupIsOpen = useSelector((state) => state.cart.popupIsOpen);
  return (
    <div className={`Popup  ${popupIsOpen ? 'Popup_popupIsOpen' : ''}`}>
      Товар добавлен в корзину <FaCartArrowDown />
    </div>
  );
};

export default CartPopup;
