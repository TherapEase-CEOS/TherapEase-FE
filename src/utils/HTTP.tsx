import axios from 'axios';
import { API_BASE_SERVER_URL } from '@/constants/Config';
import { ACCESS_TOKEN } from '@/constants/constants';

const AxiosModule = () => {
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem(ACCESS_TOKEN);
  }
  return axios.create({
    baseURL: API_BASE_SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  });
};

const HTTP = AxiosModule(); // 매 API 실행 요청시에 새롭게 token 존재 여부를 refresh 할 수 있도록.
export default HTTP;
