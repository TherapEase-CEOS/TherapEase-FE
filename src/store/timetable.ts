import { atom } from 'recoil';
import { ITimeTable } from '@/interfaces/interfaces';
export const timeTableState = atom<ITimeTable>({
  key: 'timeTableState',
  default: {
    // 07:00 ~ 22:00 까지 차례대로 15개의 시간 블럭
    sunday: [
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
    ],
    monday: [
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
    ],
    tuesday: [
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
    ],
    wednesday: [
      true,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ],
    thursday: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
    friday: [
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
    ],
    saturday: [
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
    ],
  },
});
