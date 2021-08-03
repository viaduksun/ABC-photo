import axios from 'axios';
import setAuthToken from './setAuthToken';

const editCustomerPassword = (passwords) => {
  const token = localStorage.getItem('token');
  setAuthToken(token);
  return axios
    .put('https://intense-hamlet-33316.herokuapp.com/api/customers/password', passwords);
};
export default editCustomerPassword;