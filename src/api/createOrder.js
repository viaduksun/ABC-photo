/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-alert */
import axios from 'axios';
// === NOT LOGGED IN ====
// const newOrder = {
//   customerId: '5d99ce196d40fb1b747bc5f5',
//   deliveryAddress: {
//     country: 'Ukraine',
//     city: 'Kiev',
//     address: 'Kreshchatic Street 56//A',
//     postal: '01044'
//   },
//   shipping: 'Kiev 50UAH',
//   paymentInfo: 'Credit card',
//   status: 'not shipped',
//   email: 'saribeg@gmail.com',
//   mobile: '+380630000000',
//   letterSubject: 'Thank you for order! You are welcome!',
//   letterHtml:
//     '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>'
// };
//  === LOGGED IN ========

const newOrder = {
  products: JSON.stringify([
    {
      _id: '5dac20058b2cb420e0af4677',
      product: JSON.stringify({
        enabled: true,
        imageUrls: [
          'img/products/men/001.png',
          'img/products/men/002.png',
          'img/products/men/003.png',
          'img/products/men/004.png',
        ],
        _id: '60f7f0b633f8ea00157c2cd5',
        quantity: 5,
        name: 'updted product for testing purposes 222',
        currentPrice: 100,
        previousPrice: 250,
        categories: 'men',
        color: 'red',
        productUrl: '/men',
        brand: 'braaaand',
        myCustomParam: 'some string or json for custom param',
        itemNo: '291759',
        date: '2019-10-14T12:00:39.679Z',
        __v: 0,
        oneMoreCustomParam: {
          description: 'blablabla',
          rate: 4.8,
          likes: 20,
        },
      }),
      cartQuantity: 2,
    },
  ]),
  deliveryAddress: JSON.stringify({
    country: 'Ukraine',
    city: 'Kiev',
    address: 'Kreshchatic Street 56//A',
    postal: '01044',
  }),
  shipping: JSON.stringify('Kiev 50UAH'),
  paymentInfo: JSON.stringify('Credit card'),
  status: 'not shipped',
  email: 'saribeg@gmail.com',
  mobile: '+380630000000',
  letterSubject: 'Thank you for order! You are welcome!',
  letterHtml:
    '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
  canceled: false,
};
// const newOrderJson = JSON.stringify(newOrder);
// const newParsedOrder = JSON.parse(newOrderJson);
const createOrder = () =>
  // const headers = {
  //   'Content-Type': 'application/json',
  // };
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    // .post('http://localhost:5000/api/orders', newOrder)
    .post('https://intense-hamlet-33316.herokuapp.com/api/orders', newOrder)
    .then((newOrderRes) => {
      /* Do something with newOrder */
      console.log('NEW ORDER: ', newOrderRes);
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
export default createOrder;
