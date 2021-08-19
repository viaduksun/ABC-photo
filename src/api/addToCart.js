/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const addToCart = (singleProduct) => {
  console.log('ADD TO CART', singleProduct);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .put(`https://intense-hamlet-33316.herokuapp.com/api/cart/${singleProduct._id}`, headers)
    .then((newCartResponse) => {
      /* Do something with newCart */
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
    });
};
export default addToCart;