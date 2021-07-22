// import axios from 'axios';
// import {message} from 'antd';
// import {DOMAIN} from '';
// const BASE_POINT = `${DOMAIN}/subscribes`;
// const createNewSubscribe = (credentials) => {
    // axios.post(BASE_POINT, credentials)
//     .then((response) => {
//         if (response.status === 200) {
//             message.info('You have been subscribed to updates');
//         }
//     })
//     .catch((error) => {
//         const requestMessage = error.response.data.message;
//         if (requestMessage) {
//             message.warning(`${requestMessage}`);
//         } else {
//              message.warning('Something went wrong, please try again');
//         }
//     });
// };
// export default createNewSubscribe;