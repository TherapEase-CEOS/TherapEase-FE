// 전체 클라이언트 타입
export interface IClient {
  clientId: string;
  name: string;
  status: 'ongoing' | 'completed';
  createdAt: string;
  goal: string;
  weeklySchedule: ISchedule;
}
// 요일 문자열만 허용하는 타입
export type Weekday =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

// 각 요일+시간 한 항목 타입
export interface ISchedule {
  day: Weekday;
  time: string; // e.g., '15:00'
}

export interface IUser {
  id: number;
  name: string;
  authCode: string;
  role: string;
  counselorId?: string; // 상담사일경우만
  clientId?: string; // 내담자일경우만
}
export type EmotionCategory =
  | 'sad'
  | 'mad'
  | 'scared'
  | 'joyful'
  | 'powerful'
  | 'peaceful';

export type EmotionFeeling = 'positive' | 'negative' | 'unsure';

export interface IEmotion {
  category: EmotionCategory;
  subcategory: string;
  feeling: EmotionFeeling;
  intensity: number; // 1~5
}

export interface IDailyRecord {
  date: string; // 'YYYY-MM-DD'
  record: IEmotionRecord | null;
}

export interface IEmotionRecord {
  _id?: string;
  clientId?: string;
  date: string; // ISO date string (e.g. "2025-05-19T00:00:00.000Z")
  answer1: string;
  answer2: string;
  answer3: string;
  emotions: IEmotion[];
}

export interface IGraphRecord {
  date: string;
  emotions: IEmotion[];
}

export interface ICounselorProfile {
  name: string;
  contact: string;
  introText: string;
}

export interface ITimeTable {
  [key: string]: boolean[];
}
export interface ICounselorInfoResponse {
  timetable: ITimeTable;
  counselorProfile: ICounselorProfile;
}
