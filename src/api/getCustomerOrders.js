import axios from 'axios';
import setAuthToken from './setAuthToken';

const getCustomerOrders = () => {
  const token = localStorage.getItem('token');
  setAuthToken(token);
  return axios
    .get('https://intense-hamlet-33316.herokuapp.com/api/orders');
};
export default getCustomerOrders;