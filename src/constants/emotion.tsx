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
