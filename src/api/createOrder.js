/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-alert */
import axios from 'axios';

const createOrder = (newOrder) => {
  console.log('NEW ORDER: ', newOrder);
  return axios.post('https://intense-hamlet-33316.herokuapp.com/api/orders', newOrder)
    // return axios.post('http://localhost:5000/api/orders', newOrder)

    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};
export default createOrder;
