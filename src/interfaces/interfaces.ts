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
  authCode: string;
  role: string;
  counselorId?: string; // 상담사일경우만
  clientId?: string; // 내담자일경우만
}
type EmotionCategory =
  | 'sad'
  | 'Mad'
  | 'Scared'
  | 'Joyful'
  | 'Powerful'
  | 'Peaceful';

type EmotionFeeling = 'positive' | 'negative' | 'unsure';

export interface IEmotion {
  category: EmotionCategory;
  subcategory: string;
  feeling: EmotionFeeling;
  intensity: number; // 1~5
}

export interface IEmotionFull {
  emotions: IEmotion;
  details1: string | null;
  details2: string | null;
  details3: string | null;
}

export interface IDailyRecord {
  date: string; // 'YYYY-MM-DD'
  record: IEmotionRecord | null;
}

export interface IEmotionRecord {
  _id: string;
  clientId: string;
  date: string; // ISO date string (e.g. "2025-05-19T00:00:00.000Z")
  answer1: string;
  answer2: string;
  answer3: string;
  emotions: IEmotion[];
  __v: number;
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
