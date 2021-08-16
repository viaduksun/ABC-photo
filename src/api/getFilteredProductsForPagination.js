import axios from 'axios';

const filteredProductsForPagination = (currentCategory, addQuery) => {
  console.log(addQuery);
  return axios
    .get(
      `https://intense-hamlet-33316.herokuapp.com/api/products/filter?category=${currentCategory}${addQuery}`
    )
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};
  // eslint-disable-next-line implicit-arrow-linebreak

export default filteredProductsForPagination;