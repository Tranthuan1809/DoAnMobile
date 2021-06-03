import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://192.168.1.20:44398',
  withCredentials: false,
});

export default axiosInstance;