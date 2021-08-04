import axios from 'axios';
import setAuthToken from './setAuthToken';

const getCustomer = () => {
  const token = localStorage.getItem('token');
  setAuthToken(token);
  return axios
    .get('https://intense-hamlet-33316.herokuapp.com/api/customers/customer')
    .then((loggedInCustomer) => {
      /* Do something with loggedInCustomer */
      console.log('loggedInCustomer', loggedInCustomer);
    })
    .catch((err) => {
      /* Do something with error */
      console.log(err);
    });
};
export default getCustomer;