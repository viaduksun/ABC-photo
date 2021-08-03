import axios from 'axios';

const uploadImg = (imageSelected) => {
  const formData = new FormData();
  formData.append('file', imageSelected);
  formData.append('upload_preset', 'photo-store');
  console.log('UPLOAD click');
  return axios
    .post(
      'https://api.cloudinary.com/v1_1/finalprojectfe242021/image/upload/',
      formData
    );
};

export default uploadImg;
