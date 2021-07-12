import axios from 'axios';
import { product03 } from '../Data/products';

const createProductLocalHost5000 = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .post('http://localhost:5000/api/products', product03, {
      headers,
    })
    .then((newProduct) => {
      /* Do something with newProduct */
      console.log('Product has been added', newProduct.data.name);
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};

export default createProductLocalHost5000;
