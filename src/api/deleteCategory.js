/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const deleteCategory = (id) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  axios
    .delete(`https://intense-hamlet-33316.herokuapp.com/api/catalog/${id}`, {
      headers,
    }).then((res) => {
      alert('Category deleted');
      /* Do something with product */
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err.message);
    });
};
export default deleteCategory;
