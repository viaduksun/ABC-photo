/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const updateCart = (cartArr) => {
  console.log('IPDATE API', cartArr);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  const updatedCart = JSON.stringify({
    products: cartArr
  });
  return axios
    .put('https://intense-hamlet-33316.herokuapp.com/api/cart', updatedCart, { headers })
    // .then((newCartResponse) => {
    //   console.log('UPDATED CART', newCartResponse);
    //   /* Do something with newCart */
    // })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
    });
};
export default updateCart;