/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

const userData = {
  loginOrEmail: 'admin@gmail.com',
  password: 'admin1234',
};

const Login = () =>
  // console.log('LOGIN', userData);

  axios
    // .post('https://intense-hamlet-33316.herokuapp.com/api/customers/login', userData)
    .post('http://localhost:5000/api/customers/login', userData)
    // .then((loginResult) => {
    //   console.log('loginResult', loginResult);
    //   console.log('token: ', loginResult.data.token);
    //   localStorage.setItem('token', loginResult.data.token);
    //   /* Do something with jwt-token if login successed */
    // })
    .catch((err) => {
      console.log(
        err
      ); /* Show error to customer, may be incorrect password or something else */
    });
export default Login;
