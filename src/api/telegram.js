import axios from 'axios';

const sendMessageToTelegram = (value) => {
  const token = '1884092922:AAHZnCXhfTrAjcj_fmfZ1plGu5AU_9NStlk';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-542627103&text=${value}`;
  return axios.get(url);
};

export default sendMessageToTelegram;
