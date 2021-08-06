/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const getAllProductsAdmin = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    // .get('https://intense-hamlet-33316.herokuapp.com/api/products/filter?color=red&perPage=14&startPage=1')
    .get('https://intense-hamlet-33316.herokuapp.com/api/products/filter?perPage=9&startPage=1')
    // .get('https://intense-hamlet-33316.herokuapp.com/api/products')
    // /products/filter?param1=value1&param2=value2-1,value2-2,value2-3&param3=value3&perPage=2&startPage=1

    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });

export default getAllProductsAdmin;
