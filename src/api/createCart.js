/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const createCart = (singleProduct) => {
  console.log('CREATE CART', singleProduct._id);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  const newCart = {
    products: JSON.stringify([
      {
        product: singleProduct._id,
        cartQuantity: 1
      }
    ])
  };
  return axios
    .post('https://intense-hamlet-33316.herokuapp.com/api/cart', newCart, { headers })

    .catch((err) => {
      /* Do something with error, e.g. show error to user */
    });
};
export default createCart;