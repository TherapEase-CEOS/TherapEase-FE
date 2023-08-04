import HTTP from '@/utils/HTTP';
import { IEmotion } from '@/interfaces/interfaces';

// 감정 리스트 조회
export const getEmotionRecordList = async (counseleeId: number | string) => {
  const response = await HTTP.get(`/emotion/list/${counseleeId}/`);

  return response.data;
};

// 감정 그래프 조회
export const getEmotionGraph = async (counseleeId: number | string) => {
  const response = await HTTP.get(`/emotion/graph/${counseleeId}/`);

  return response.data;
};

// 감정 생성
export const postEmotionLog = async (
  counseleeId: number | string,
  body: any,
) => {
  const response = await HTTP.post(`/emotion/${counseleeId}/`, body);

  return response.data;
};
