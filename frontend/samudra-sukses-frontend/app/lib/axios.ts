import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Sesuaikan dengan URL API Laravel Anda
});

export default instance;
