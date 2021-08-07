/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import setAuthToken from './setAuthToken';

const uploadImg = (imageSelected) => {
  const formData = new FormData();
  formData.append('file', imageSelected);
  formData.append('upload_preset', 'photo-store');
  setAuthToken(false);

  return axios
    .post(
      'https://api.cloudinary.com/v1_1/finalprojectfe242021/image/upload', formData
    );
};

export default uploadImg;
