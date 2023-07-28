import HTTP from '@/utils/HTTP';

export const login = async (body: { code: string }) => {
  const response = await HTTP.post(`/accounts/login/`, body);

  return response.data;
};

export const getUser = async () => {
  const response = await HTTP.get(`/accounts/check/`);
  return response.data;
  /*
  return {
    id: 1,
    name: '황재령',
    code: 'or1234',
    role: 'counselor',
  };
  */
};
