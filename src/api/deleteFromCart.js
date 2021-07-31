/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const deleteFromCart = (singleProduct) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  const updatedCart = {
    products: [
      {
        product: singleProduct._id,
        cartQuantity: 5
      }
    ]
  };
  return axios
    .delete(`https://intense-hamlet-33316.herokuapp.com/api/cart/${singleProduct._id}`, { headers })
    .then((newCartResponse) => {
      console.log('UPDATED CART', newCartResponse);
      /* Do something with newCart */
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
    });
};
export default deleteFromCart;