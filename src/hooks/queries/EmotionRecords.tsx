import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IEmotion, IEmotionRecord } from '@/interfaces/interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const createEmotionRecord = (payload: IEmotionRecord) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/emotion-records`,
    payload,
    {
      withCredentials: true,
    },
  );
};

export const useCreateEmotionRecord = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: IEmotionRecord) => createEmotionRecord(payload),
    onSuccess: (_, variables) => {
      // clientId 기반으로 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ['emotionRecords'], // TODO 나중에 수정하기
        exact: false, // 하위 queryKey도 모두 포함해서 무효화
      });

      toast.success('기록 추가 성공');
    },
  });
};
