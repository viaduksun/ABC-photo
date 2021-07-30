/* eslint-disable no-unused-vars */
import axios from 'axios';

const postConfigs = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  const newConfigs = {
    customId: 'finalprojectfe242021',
    development: {
      database: {
        uri: 'mongodb+srv://store:finalprojectfe242021@cluster0.hgx31.mongodb.net'
      },
      email: {
        mailUser: 'final.project.fe24@gmail.com',
        mailPassword: 'finalprojectfe242021',
        mailService: 'gmail'
      },
      auth: {
        secretOrKey: 'finalprojectfe242021'
      },
      infinitScrollEnabled: true,
      minOrderValue: 100,
      someCustomParam: 'custom params value'
    },
    production: {
      database: {
        uri: 'mongodb+srv://store:finalprojectfe242021@cluster0.hgx31.mongodb.net'
      },
      email: {
        mailUser: 'final.project.fe24@gmail.com',
        mailPassword: 'finalprojectfe242021',
        mailService: 'gmail'
      },
      auth: {
        secretOrKey: 'finalprojectfe242021'
      },
      infinitScrollEnabled: true,
      minOrderValue: 100,
      someCustomParam: 'custom params value'
    }
  };
  return axios
    .post('https://intense-hamlet-33316.herokuapp.com/api/configs', newConfigs, { headers })
    .then((res) => {
      /* Do something with newConfigs */
      console.log('CONFIGS', res);
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
    });
};
export default postConfigs;