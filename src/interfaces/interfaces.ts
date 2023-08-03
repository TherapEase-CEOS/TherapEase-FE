export interface IClient {
  id: number;
  name: string;
  code: string;
  start: string;
  progress: boolean;
  counselingDate: string;
  goal: string;
}

export interface IUser {
  id: number;
  name: string;
  code: string;
  role: string;
  refresh: string;
  access: string;
  partnerId?: string;
  accountId?: string;
}

export interface IEmotion {
  main_emotion: string; // TODO 변수명 카멜케이스로 수정 변경 요청
  sub_emotion: string;
  feeling: string; // TODO 백엔드에 number로 수정요청
  intensity: number;
}

export interface IEmotionFull {
  emotions: IEmotion;
  details1: string | null;
  details2: string | null;
  details3: string | null;
}

export interface IRecord {
  date: string;
  emotions: IEmotion[];
  details1: string | null;
  details2: string | null;
  details3: string | null;
}

export interface IEmotionRecordResponse {
  page: number;
  totalCount: number;
  records: IRecord[];
}
export interface ITimeTable {
  [key: string]: boolean[];
}

export interface IGraphRecord {
  date: string;
  emotions: IEmotion[];
}

export interface ICounselorProfile {
  name: string;
  contact: string;
  introduction: string;
}
