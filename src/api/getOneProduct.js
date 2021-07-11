/* eslint-disable no-unused-vars */
import axios from 'axios';

const getOneProduct = (itemNo) => {
  // console.log('itemNo', itemNo);
  axios
    .get(`https://intense-hamlet-33316.herokuapp.com/api/products/${itemNo}`).then((product) => {
      /* Do something with product */
      console.log('product', product);
    })

    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};
export default getOneProduct;