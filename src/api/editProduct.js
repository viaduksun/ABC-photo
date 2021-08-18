/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const editProductApi = (id, updatedProduct) => {
  // const updatedProduct = {
  //   name: 'Updted product for testing purposes 222',
  //   quantity: 156,
  //   currentPrice: 100,
  //   brand: 'new brand',
  //   oneMoreCustomParam: '{"description": "blablabla", "rate": 4.8, "likes": 20}'
  // };
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .put(`https://intense-hamlet-33316.herokuapp.com/api/products/${id}`, updatedProduct, {
      headers,
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};
export default editProductApi;