import axios from 'axios';
const Api = axios.create({
  baseURL: 'http://localhost:40000/',
});

export default Api;
