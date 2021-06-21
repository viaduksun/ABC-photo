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

const userRegister = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios
    .post(
      'https://intense-hamlet-33316.herokuapp.com/api/customers',
      newCustomer,
      {
<<<<<<< HEAD
        headers: headers,
=======
        headers,
>>>>>>> develop
      }
    )
    .then((savedCustomer) => {
      console.log('savedCustomer', savedCustomer);
      /* Do something with customer */
    })
    .catch((err) => {
      console.log(err);
    });
};
export default userRegister;
