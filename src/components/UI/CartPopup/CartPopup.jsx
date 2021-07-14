/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './CartPopup.scss';

const CartPopup = () => {
    const [state, setState] = useState(false);

    const classHandler = () => {
        console.log('Click');
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 1000);
      };

    console.log('test');
    return (
      <>
        <div
          className={`Popup  ${state ? 'Popup_popupIsOpen' : ''}`}
        >
          123
        </div>
        <button type="button" style={{backgroundColor: 'red'}} onClick={classHandler}>1</button>
      </>
    );
};

export default CartPopup;