import HTTP from '@/utils/HTTP';
import { ITimeTable, ICounselorProfile } from '@/interfaces/interfaces';

export const getTimetable = async () => {
  const response = await HTTP.get('/timetable');

  return response.data;
};

export const updateTimetable = async (body: ITimeTable) => {
  const response = await HTTP.post('/timetable', body);

  return response.data;
};
export const getCounselorProfile = async () => {
  const response = await HTTP.get('/profile');

  return response.data;
};
export const updateCounselorProfile = async (body: ICounselorProfile) => {
  const response = await HTTP.patch('/profile', body);

  return response.data;
};
