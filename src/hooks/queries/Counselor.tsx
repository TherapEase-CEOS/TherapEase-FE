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

export const fetchCounselorInfo = async (
  counselorId: string,
): Promise<ICounselorInfoResponse> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/counselor/${counselorId}/full`,
    {
      withCredentials: true, // 쿠키 기반 인증 시 필요
    },
  );
  return res.data;
};

export const updateCounselorInfo = async ({
  counselorId,
  payload,
}: {
  counselorId: string;
  payload: ICounselorInfoResponse;
}): Promise<ICounselorInfoResponse> => {
  return await axios.put(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/counselor/${counselorId}/full`,
    payload,
    {
      withCredentials: true, // 쿠키 기반 인증 시 필요
    },
  );
};

export const useCounselorInfo = (counselorId: string) => {
  return useQuery<ICounselorInfoResponse>({
    queryKey: ['counselorInfo', counselorId],
    queryFn: () => fetchCounselorInfo(counselorId),
    enabled: !!counselorId,
  });
};

export const useUpdateCounselorInfo = (counselorId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ICounselorInfoResponse) =>
      updateCounselorInfo({ counselorId, payload }),
    onSuccess: () => {
      queryClient.invalidateQueries(['counselorInfo', counselorId]);
      toast.success('저장 완료');
    },
  });
};

export const fetchCounselorProfile = async (
  counselorId: string,
): Promise<ICounselorProfile> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/counselor/${counselorId}/profile`,
    {
      withCredentials: true, // 쿠키 기반 인증 시 필요
    },
  );
  return res.data;
};

export const useCounselorProfile = (counselorId: string) => {
  return useQuery<ICounselorProfile>({
    queryKey: ['counselorProfile', counselorId],
    queryFn: () => fetchCounselorProfile(counselorId),
    enabled: !!counselorId, // undefined 방지
    //refetchInterval: 10000, // 10초마다 자동 refetch
  });
};

export const fetchCounselorTimetable = async (
  counselorId: string,
): Promise<ITimeTable> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/counselor/${counselorId}/timetable`,
    {
      withCredentials: true, // 쿠키 기반 인증 시 필요
    },
  );
  return res.data;
};

export const useCounselorTimetable = (counselorId: string) => {
  return useQuery<ITimeTable>({
    queryKey: ['counselorTimetable', counselorId],
    queryFn: () => fetchCounselorTimetable(counselorId),
    enabled: !!counselorId,
    // refetchInterval: 10000, // ⏱ 10초마다 자동 refetch
  });
};
