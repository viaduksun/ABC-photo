import axios from 'axios';

const getProducts = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get('https://intense-hamlet-33316.herokuapp.com/api/products')

    // console.log('products', products);
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });

export default getProducts;
