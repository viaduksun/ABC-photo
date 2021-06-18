import axios from 'axios';

const userData = {
  loginOrEmail: 'admin@gmail.com',
  password: 'admin1234',
};

const Login = () => {
  console.log('LOGIN BTN');
  return axios
    .post('https://intense-hamlet-33316.herokuapp.com/api/customers/login', userData)
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

export default Login;
