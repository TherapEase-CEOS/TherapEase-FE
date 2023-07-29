import HTTP from '@/utils/HTTP';
import { ITimeTable, ICounselorProfile } from '@/interfaces/interfaces';

export const getTimetable = async () => {
  const response = await HTTP.get('/schedule/');

  return response.data;
};

export const updateTimetable = async (body: ITimeTable) => {
  const response = await HTTP.post('/schedule/', body);

  return response.data;
};
export const getCounselorProfile = async (counselorId: any) => {
  const response = await HTTP.get(`/accounts/profile/${counselorId}/`);

  return response.data;
};
export const updateCounselorProfile = async (
  counselorId: any,
  body: ICounselorProfile,
) => {
  const response = await HTTP.patch(`/accounts/profile/${counselorId}/`, body);

  return response.data;
};
