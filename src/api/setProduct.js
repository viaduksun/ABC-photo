import axios from 'axios';

const newProduct = {
  name: 'product for testing purposes',
  currentPrice: 199.99,
  previousPrice: 250,
  categories: 'men',
  imageUrls: [

    'img/products/men/001.png',
    'img/products/men/002.png',
    'img/products/men/003.png',
    'img/products/men/004.png',
  ],
  quantity: 100,
  color: 'red',
  productUrl: '/men',
  brand: 'braaaand',
  myCustomParam: 'some string or json for custom param',
};

const setProduct = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .post('http://localhost:5000/api/products', newProduct, {
      headers: headers,
    })
    .then((newProduct) => {
      /* Do something with newProduct */
      console.log('POST OK');
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};

export default setProduct;
