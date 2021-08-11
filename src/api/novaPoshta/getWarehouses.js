/* eslint-disable no-unused-vars */
import axios from 'axios';

const getWarehouses = (cityRef) => {
  const data = {
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: cityRef
    },
    apiKey: 'ba89082940dc2fa03afd1e2d47cd5cdc'
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
export default getWarehouses;