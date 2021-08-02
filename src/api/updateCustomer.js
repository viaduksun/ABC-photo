/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const updateCustomer = (form) => {
  console.log('IPDATE USER', form);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .put('https://intense-hamlet-33316.herokuapp.com/api/customers', form, { headers });
};
export default updateCustomer;