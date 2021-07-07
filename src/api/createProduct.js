import axios from 'axios';

const createProduct = (product) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .post('https://intense-hamlet-33316.herokuapp.com/api/products', product, {
      headers,
    })
    .then((newProduct) => {
      /* Do something with newProduct */
      console.log('Product has been added', newProduct);
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};

export default createProduct;
