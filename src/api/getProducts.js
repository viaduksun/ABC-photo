import axios from 'axios';

const getProducts = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get('https://intense-hamlet-33316.herokuapp.com/api/products')
    // .get('http://localhost:5000/api/products')

    // console.log('products', products);
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });

export default getProducts;

// import axios from 'axios';

// const getProducts = () =>
//   // eslint-disable-next-line implicit-arrow-linebreak
//   axios
//     .get('http://localhost:5000/api/products')

//     // console.log('products', products);
//     .catch((err) => {
//       /* Do something with error, e.g. show error to user */
//       console.log(err);
//     });

// export default getProducts;
