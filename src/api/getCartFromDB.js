/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const getCartFromDB = () => {
  console.log('GET CART');
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .get('https://intense-hamlet-33316.herokuapp.com/api/cart', { headers });
};
export default getCartFromDB;