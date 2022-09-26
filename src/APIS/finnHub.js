import axios from 'axios';
const token = 'ccoadgqad3i89lgc0vo0ccoadgqad3i89lgc0vog';
export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token,
  },
});
