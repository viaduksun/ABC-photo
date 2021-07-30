import axios from 'axios';

const getSearchProducts = (value) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios.post('https://intense-hamlet-33316.herokuapp.com/api/products/search', {
    query: value,
  });

export default getSearchProducts;
