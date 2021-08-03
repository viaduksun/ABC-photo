import axios from 'axios';

const uploadImg = (imageSelected) => {
  const formData = new FormData();
  formData.append('file', imageSelected);
  formData.append('upload_preset', 'avatarsUploading');
  console.log('UPLOAD click');
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
    }
  };
  return axios
    .post(
      'https://api.cloudinary.com/v1_1/finalprojectfe242021/image/upload/',
      formData, config
    );
};

export default uploadImg;
