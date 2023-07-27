import { QueryKey } from 'react-query';
interface IQueryKey {
  [key: string]: QueryKey;
}

export const queryKeys = {
  user: 'userKey' as QueryKey,
  timetable: 'timetableKey' as QueryKey,
};
