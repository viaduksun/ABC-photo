import axios from 'axios';

const userData = {
  loginOrEmail: 'customerwertygfd@gmail.com',
  password: '111111111212222',
};

const login = () => {
  console.log('LOGIN BTN');
  return axios
    .post('http://localhost:5000/api/customers/login', userData)
    .then((loginResult) => {
      console.log('loginResult', loginResult);
      localStorage.setItem('token', loginResult.data.token);
      /* Do something with jwt-token if login successed */
    })
    .catch((err) => {
      console.log(
        err
      ); /* Show error to customer, may be incorrect password or something else */
    });
};

export default login;
