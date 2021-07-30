import axios from 'axios';

// const newSubscriber = {
//   email: 'saribeg12345678@gmail.com',
//   letterSubject: 'Test letter (final project)',
//   production: {
//     enabled: true,
//     imageUrls: [
//       'img/products/men/001.png',
//       'img/products/men/002.png',
//       'img/products/men/003.png',
//       'img/products/men/004.png',
//     ],
//     _id: '60f7f0b633f8ea00157c2cd5',
//     quantity: 5,
//     name: 'updted product for testing purposes 222',
//     currentPrice: 100,
//     previousPrice: 250,
//     categories: 'men',
//     color: 'red',
//     productUrl: '/men',
//     brand: 'braaaand',
//     myCustomParam: 'some string or json for custom param',
//     itemNo: '291759',
//     date: '2019-10-14T12:00:39.679Z',
//     __v: 0,
//     oneMoreCustomParam: {
//       description: 'blablabla',
//       rate: 4.8,
//       likes: 20,
//     },
//   },
// };
const addSubscriber = (singleProduct, form) => {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //   };
  console.log('test');
  return axios
    .post('https://intense-hamlet-33316.herokuapp.com/api/subscribers', {
      name: form.name,
      phone: form.phone,
      email: form.email,
      letterSubject: 'Test letter (final project)',
      letterHtml:
        "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>",
      singleProduct,
    })
    .then((newSubscriberRes) => {
      console.log('newSubscriberRes', newSubscriberRes);
    })
    .catch((err) => {
      console.log('newSubscriber', err);
      console.log(form.email);
    });
};

export default addSubscriber;
