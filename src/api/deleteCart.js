/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const deleteCart = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .delete('https://intense-hamlet-33316.herokuapp.com/api/cart', { headers })
    .then((newCartResponse) => {
      console.log('deleted CART', newCartResponse);
      /* Do something with newCart */
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
    });
};
export default deleteCart;