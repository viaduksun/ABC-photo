import axios from 'axios';

const getFilteredProducts = (currentCategory, page) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get(`https://intense-hamlet-33316.herokuapp.com/api/products/filter?category=${currentCategory}&perPage=3&startPage=${page}`)
    // .then((res) => {
    //   console.log('RESULT', res);
    //   // console.log('currentCategory', currentCategory);
    // })

    // console.log('products', products);
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });

export default getFilteredProducts;
