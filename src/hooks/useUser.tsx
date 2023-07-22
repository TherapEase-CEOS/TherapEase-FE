import { useQueryClient } from 'react-query';
import { IUser } from '@/interfaces/interfaces';
import { queryKeys } from '@/constants/queryKeys';

const queryClient = useQueryClient();

function updateUser(newUser: IUser): void {
  queryClient.setQueryData(queryKeys.user, newUser); // React Query 유저 캐시를 업데이트
}

function clearUser() {
  // 로그아웃 처리
  queryClient.setQueryData(queryKeys.user, null);
}
