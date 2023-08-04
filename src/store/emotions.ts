import {
  DUMMY_EMOTION_GRAPH_RECORDS,
  DUMMY_EMOTION_RECORDS,
} from '@/constants/DUMMY_DATA';
import { atom } from 'recoil';

export const emotionRecordListState = atom({
  key: 'emotionRecordListState',
  // default: [],
  default: DUMMY_EMOTION_RECORDS.records,
});

export const emotionRecordGraphState = atom({
  key: 'emotionRecordGraphState',
  // default: [],
  default: DUMMY_EMOTION_GRAPH_RECORDS,
});
