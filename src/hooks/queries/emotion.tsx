import HTTP from '@/utils/HTTP';
import { IEmotion } from '@/interfaces/interfaces';

export const getEmotionRecordList = async (counseleeId: number | string) => {
  const response = await HTTP.get(`/emotion/list/${counseleeId}/`);

  return response.data;
};
