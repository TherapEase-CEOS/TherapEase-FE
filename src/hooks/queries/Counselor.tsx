// hooks/useCounselorClients.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  ICounselorInfoResponse,
  ICounselorProfile,
  ITimeTable,
} from '@/interfaces/interfaces';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const fetchClients = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/counselor/clients`,
    {
      withCredentials: true, // 쿠키 기반 인증 시 필요
    },
  );
  return res.data;
};

export const useClientList = () => {
  return useQuery({
    queryKey: ['counselorClients'],
    queryFn: async () => fetchClients(),
  });
};
