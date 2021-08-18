/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const editCategory = (id, updatedCategory) => {
  console.log('API ID ===', id);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .put(`https://intense-hamlet-33316.herokuapp.com/api/catalog/${id}`, updatedCategory, {
      headers,
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};
export default editCategory;