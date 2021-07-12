/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import axios from 'axios';

// const deleteOneProduct = (id) => {
//   // console.log('itemNo', itemNo);
//   axios
//     .delete(`https://intense-hamlet-33316.herokuapp.com/api/products/${id}`).then((res) => {
//       /* Do something with product */
//       console.log('DELETE', res);
//       alert('Product deleted');
//     })

//     .catch((err) => {
//       /* Do something with error, e.g. show error to user */
//       console.log(err);
//     });
// };
// export default deleteOneProduct;

const deleteOneProduct = (itemNo) => {
  console.log('itemNo', itemNo);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  axios
    .delete(`http://localhost:5000/api/products/${itemNo}`, {
      headers,
    }).then((res) => {
      /* Do something with product */
      console.log('DELETE', res);
      alert('Product deleted');
    })

    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err.message);
    });
};
export default deleteOneProduct;