/* eslint-disable no-unused-vars */
import axios from 'axios';

const uploadImg = (imageSelected) => {
  const formData = new FormData();
  formData.append('file', imageSelected);
  formData.append('upload_preset', 'photo-store');

  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: token,
  };

  return axios
    .post(
      'https://api.cloudinary.com/v1_1/finalprojectfe242021/image/upload/', formData,
      headers
    );
};

export default uploadImg;
