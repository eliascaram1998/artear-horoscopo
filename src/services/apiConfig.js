import axios from 'axios';

export const API_BASE_URL = 'http://192.168.0.5:3001';
export const API_HEADERS = {
  Authorization: 'qazwsx'
};

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: API_HEADERS
});