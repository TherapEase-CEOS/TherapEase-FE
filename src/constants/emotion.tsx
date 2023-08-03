interface MediumEmotion {
  [key: string]: string;
}

interface LargeEmotion {
  [key: string]: MediumEmotion;
}

export const EMOTION_MAP: LargeEmotion = {
  sad: {
    guilty: '죄책감',
    ashamed: '부끄러움',
    depressed: '우울함',
    lonely: '외로움',
    bored: '지루함',
    sleepy: '피곤함',
  },
  scared: {
    rejected: '거절당함',
    confused: '혼란스러움',
    helpless: '무력함',
    submissive: '순종적',
    insecure: '자신없음',
    anxious: '불안함',
  },
  powerful: {
    proud: '자랑스러움',
    respected: '존경받음',
    appreciated: '인정받음',
    hopeful: '희망적',
    important: '중요',
    faithful: '충실함',
  },
  peaceful: {
    content: '만족함',
    thoughtful: '사려깊음',
    intimate: '친밀감',
    loving: '사랑',
    trusting: '신뢰',
    nurturing: '배려',
  },
  mad: {
    hurt: '상처받음',
    hostile: '적대적',
    angry: '화남',
    rage: '분노',
    hateful: '혐오',
    critical: '비판적',
  },
  joyful: {
    excited: '흥분함',
    sexy: '매력적',
    energetic: '활기참',
    playful: '장난스러움',
    creative: '창의적',
    aware: '관심있음',
  },
};

export const LARGE_EMOTION = [
  { value: 'sad', label: '슬퍼요', labelShort: '슬픔' },
  { value: 'scared', label: '무서워요', labelShort: '공포' },
  { value: 'powerful', label: '강해요', labelShort: '강함' },
  { value: 'peaceful', label: '평화로워요', labelShort: '온화' },
  { value: 'mad', label: '화가 나요', labelShort: '화남' },
  { value: 'joyful', label: '기뻐요', labelShort: '기쁨' },
];

export const MEDIUM_EMOTION = [
  {
    large: 'sad',
    medium: [
      { value: 'guilty', label: '죄책감' },
      { value: 'ashamed', label: '부끄러움' },
      { value: 'depressed', label: '우울함' },
      { value: 'lonely', label: '외로움' },
      { value: 'bored', label: '지루함' },
      { value: 'sleepy', label: '피곤함' },
    ],
  },
  {
    large: 'scared',
    medium: [
      { value: 'rejected', label: '거절당함' },
      { value: 'confused', label: '혼란스러움' },
      { value: 'helpless', label: '무력함' },
      { value: 'submissive', label: '순종적' },
      { value: 'insecure', label: '자신없음' },
      { value: 'anxious', label: '불안함' },
    ],
  },
  {
    large: 'powerful',
    medium: [
      { value: 'proud', label: '자랑스러움' },
      { value: 'respected', label: '존경받음' },
      { value: 'appreciated', label: '인정받음' },
      { value: 'hopeful', label: '희망적' },
      { value: 'important', label: '중요' },
      { value: 'faithful', label: '충실함' },
    ],
  },
  {
    large: 'peaceful',
    medium: [
      { value: 'content', label: '만족함' },
      { value: 'thoughtful', label: '사려깊음' },
      { value: 'intimate', label: '친밀감' },
      { value: 'loving', label: '사랑' },
      { value: 'trusting', label: '신뢰' },
      { value: 'nurturing', label: '배려' },
    ],
  },
  {
    large: 'mad',
    medium: [
      { value: 'hurt', label: '상처받음' },
      { value: 'hostile', label: '적대적' },
      { value: 'angry', label: '화남' },
      { value: 'rage', label: '분노' },
      { value: 'hateful', label: '혐오' },
      { value: 'critical', label: '비판적' },
    ],
  },
  {
    large: 'joyful',
    medium: [
      { value: 'excited', label: '흥분함' },
      { value: 'sexy', label: '매력적' },
      { value: 'energetic', label: '활기참' },
      { value: 'playful', label: '장난스러움' },
      { value: 'creative', label: '창의적' },
      { value: 'aware', label: '관심있음' },
    ],
  },
];

export const FEELING = [
  { value: 1, label: '좋았어요' },
  { value: -1, label: '싫었어요' },
  { value: 0, label: '모르겠어요' },
];
