/* eslint-disable no-unused-vars */
import axios from 'axios';

const getCities = () => {
  const data = {
    apiKey: 'ba89082940dc2fa03afd1e2d47cd5cdc',
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: {},
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios
    .post('https://api.novaposhta.ua/v2.0/json/', data, {
      headers
    })
    .catch((error) => console.log('ERROR', error));
};
export default getCities;