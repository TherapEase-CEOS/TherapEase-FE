import HTTP from '@/utils/HTTP';
import axios from 'axios';

export const login = async (body: { code: string }) => {
  const response = await HTTP.post(`/accounts/login/`).then(
    (response) => response.data,
  );
  return response.data;
};
