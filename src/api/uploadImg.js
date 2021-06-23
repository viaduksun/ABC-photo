import axios from 'axios';

const uploadImg = (imageSelected) => {
  console.log('imageSelected', imageSelected);
  const formData = new FormData();
  formData.append('file', imageSelected);
  formData.append('upload_preset', 'photo-store');
  console.log('UPLOAD click');
  return axios

    .post(
      'https://api.cloudinary.com/v1_1/finalprojectfe242021/image/upload',
      formData
    )
    .then((res) => {
      console.log('upload: ', res);
    })
    .catch((err) => {
      console.log(
        err
      ); /* Show error to customer, may be incorrect password or something else */
    });
};

export default uploadImg;
