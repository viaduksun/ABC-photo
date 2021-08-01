/* eslint-disable no-unused-vars */
import axios from 'axios';

const newCustomer = {
  firstName: 'Customer',
  lastName: 'Newone',
  login: 'admin',
  email: 'admin@gmail.com',
  password: 'admin1234',
  telephone: '+380639502525',
  gender: 'male',
  avatarUrl: 'img/customers/023648.png',
  isAdmin: true,
};

const userRegister = (userData) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios
    .post(
      'https://intense-hamlet-33316.herokuapp.com/api/customers',
      userData,
      {
        headers,
      }
    );
  // .then((res) => {
  //   console.log('newUser', res);
  //   /* Do something with customer */
  // })

  // .catch((err) => {
  //   console.log(err.message);
  //   console.log(err);
  //   if (err.response) {
  //     console.log(err.response);
  //   }
  //   return Promise.reject(err.message);
  // });
};
export default userRegister;
