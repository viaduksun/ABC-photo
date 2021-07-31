/* eslint-disable no-unused-vars */
import axios from 'axios';

const getOneProduct = (itemNo) => {
  console.log('itemNo', itemNo);
  return axios
    .get(`https://intense-hamlet-33316.herokuapp.com/api/products/${itemNo}`)

    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};
export default getOneProduct;