import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IEmotion } from '@/interfaces/interfaces';
import { useMutation } from '@tanstack/react-query';

export const fetchEmotionRecords = (clientId: string, page = 1, limit = 7) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/emotion-records/${clientId}?page=${page}&limit=${limit}`,
    {
      withCredentials: true,
    },
  );
};

export const createEmotionRecord = (payload: IEmotion) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/emotion-records`,
    payload,
    {
      withCredentials: true,
    },
  );
};

export const useEmotionRecords = (clientId: string, page = 1, limit = 7) => {
  return useQuery({
    queryKey: ['emotionRecords', clientId, page],
    queryFn: async () =>
      fetchEmotionRecords(clientId, page, limit).then((res) => res.data),
    enabled: !!clientId, // clientId가 있을 때만 실행
  });
};

export const useCreateEmotionRecord = () => {
  return useMutation({
    mutationFn: async (payload: IEmotion) => createEmotionRecord(payload),
  });
};
