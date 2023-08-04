import { Iclient } from '@/interfaces/interfaces';

export const DUMMY_CLIENTS_LIST: Iclient[] = [
  {
    counseleeName: '김민주',
    counseleeId: '98283746',
    start: '23.05.12',
    inProgress: true,
    counselingDate: '수요일',
    counselingTime: '17:00',
    goal: '성장과정에서 성공 경험 부족으로 인해 형성된 낮은 자기효능감 해결하기',
  },
  {
    counseleeName: '김도현',
    counseleeId: 'dodo112',
    start: '22.12.15',
    inProgress: true,
    counselingDate: '목요일',
    counselingTime: '17:00',
    goal: '지나치게 삶에 관여하는 어머니로부터 독립심 키우기',
  },
  {
    counseleeName: '노준우',
    counseleeId: '13534efsdf2362',
    start: '23.01.19',
    inProgress: true,
    counselingDate: '목요일',
    counselingTime: '15:00',
    goal: '사회성 부족으로 인한 교우관계 개선하기',
  },
  {
    counseleeName: '이수지',
    counseleeId: 'assdfweredf2897s',
    start: '23.02.06',
    inProgress: true,
    counselingDate: '월요일',
    counselingTime: '17:00',
    goal: '성적 트라우마를 극복하고 일상생활로 복귀하기',
  },
  {
    counseleeName: '박민정',
    counseleeId: 'asdfs2347s',
    start: '23.04.14',
    inProgress: false,
    counselingDate: '금요일',
    counselingTime: '15:00',
    goal: '인터넷 중독으로 인한 집중력 저하로 업무에 지장이 가는 내담자, 중독의 원인을 찾고 해결하기',
  },
  {
    counseleeName: '최민서',
    counseleeId: 'asdfs2347s',
    start: '23.04.21',
    inProgress: false,
    counselingDate: '금요일',
    counselingTime: '15:00',
    goal: '섭식장애 위험군으로 인지행동치료기법을 통해 행동교정 우선시하기',
  },
];

export const DUMMY_EMOTION_RECORDS = {
  page: 1,
  totalCount: 14,
  records: [
    {
      '2023-05-25': {
        emotions: [
          {
            mainEmotion: 'peaceful',
            subEmotion: 'nurturing',
            feeling: 1,
            intensity: 5,
          },
          {
            mainEmotion: 'joyful',
            subEmotion: 'energetic',
            feeling: 1,
            intensity: 4,
          },
          {
            mainEmotion: 'powerful',
            subEmotion: 'hopeful',
            feeling: 1,
            intensity: 2,
          },
        ],
        details1: '지원한 다른 회사에서 인턴 제의가 왔다!',
        details2: '스스로에 대한 자신감이 생기고 내 자신이 대견했다.',
        details3: null,
      },
    },
    {
      '2023-05-24': {
        emotions: [
          {
            mainEmotion: 'peaceful',
            subEmotion: 'content',
            feeling: 1,
            intensity: 1,
          },
          {
            mainEmotion: 'joyful',
            subEmotion: 'energetic',
            feeling: 1,
            intensity: 2,
          },
          {
            mainEmotion: 'powerful',
            subEmotion: 'hopeful',
            feeling: 0,
            intensity: 3,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-23': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'critical',
            feeling: 1,
            intensity: 1,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'lonely',
            feeling: 0,
            intensity: 3,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'confused',
            feeling: -1,
            intensity: 1,
          },
        ],
        details1: '회사에 지원했는데 면접 탈락 소식을 듣게 되었다.',
        details2:
          '평소같았으면 자책했겠지만 스스로 잘못을 돌아보고 성장할 수 있었다.',
        details3:
          '그렇지만 여전히 탈락의 슬픔은 있었는데 슬퍼해도 되는 건지 긍정적으로 생각해야하는 지 혼란스러웠다. 그래서 친구에게 고민을 털어 놓았다.',
      },
    },
    {
      '2023-05-22': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'rage',
            feeling: 1,
            intensity: 2,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'lonely',
            feeling: 0,
            intensity: 1,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'confused',
            feeling: -1,
            intensity: 3,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-21': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'rage',
            feeling: -1,
            intensity: 3,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'guilty',
            feeling: -1,
            intensity: 2,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'helpless',
            feeling: -1,
            intensity: 2,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-20': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'rage',
            feeling: -1,
            intensity: 3,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'depressed',
            feeling: -1,
            intensity: 3,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'anxious',
            feeling: -1,
            intensity: 3,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-19': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'hateful',
            feeling: -1,
            intensity: 5,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'depressed',
            feeling: -1,
            intensity: 4,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'anxious',
            feeling: -1,
            intensity: 4,
          },
        ],
        details1: '동창회를 해서 친구들의 성공 소식을 듣게 되었다.',
        details2:
          '친구들의 성공 소식을 듣고 그들의 불행을 바라는 내 자신이 혐오스러웠다.',
        details3:
          '아직은 감정이 서툴어 집에 일이 있다고 둘러대며 자리를 피했다.',
      },
    },
    {
      '2023-05-18': {
        emotions: null,
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-17': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'rage',
            feeling: 1,
            intensity: 1,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-16': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'critical',
            feeling: 1,
            intensity: 1,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'lonely',
            feeling: 0,
            intensity: 3,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-15': {
        emotions: null,
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-14': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'rage',
            feeling: -1,
            intensity: 3,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'guilty',
            feeling: -1,
            intensity: 2,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'helpless',
            feeling: -1,
            intensity: 2,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-13': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'rage',
            feeling: -1,
            intensity: 4,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'depressed',
            feeling: -1,
            intensity: 3,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
    {
      '2023-05-12': {
        emotions: [
          {
            mainEmotion: 'mad',
            subEmotion: 'hateful',
            feeling: -1,
            intensity: 5,
          },
          {
            mainEmotion: 'sad',
            subEmotion: 'depressed',
            feeling: -1,
            intensity: 4,
          },
          {
            mainEmotion: 'scared',
            subEmotion: 'anxious',
            feeling: -1,
            intensity: 4,
          },
        ],
        details1: null,
        details2: null,
        details3: null,
      },
    },
  ],
};

export const DUMMY_EMOTION_GRAPH_RECORDS = [
  {
    date: '2023-05-19',
    emotions: [
      {
        mainEmotion: 'mad',
        subEmotion: 'hateful',
        feeling: -1,
        intensity: 5,
      },
      {
        mainEmotion: 'sad',
        subEmotion: 'depressed',
        feeling: -1,
        intensity: 4,
      },
      {
        mainEmotion: 'scared',
        subEmotion: 'anxious',
        feeling: -1,
        intensity: 4,
      },
    ],
  },
  {
    date: '2023-05-20',
    emotions: [
      {
        mainEmotion: 'mad',
        subEmotion: 'rage',
        feeling: -1,
        intensity: 3,
      },
      {
        mainEmotion: 'sad',
        subEmotion: 'depressed',
        feeling: -1,
        intensity: 3,
      },
      {
        mainEmotion: 'scared',
        subEmotion: 'anxious',
        feeling: -1,
        intensity: 3,
      },
    ],
  },

  {
    date: '2023-05-21',
    emotions: [
      {
        mainEmotion: 'mad',
        subEmotion: 'rage',
        feeling: -1,
        intensity: 3,
      },
      {
        mainEmotion: 'sad',
        subEmotion: 'guilty',
        feeling: -1,
        intensity: 2,
      },
      {
        mainEmotion: 'scared',
        subEmotion: 'helpless',
        feeling: -1,
        intensity: 2,
      },
    ],
  },

  {
    date: '2023-05-22',
    emotions: [
      {
        mainEmotion: 'mad',
        subEmotion: 'rage',
        feeling: 1,
        intensity: 2,
      },
      {
        mainEmotion: 'sad',
        subEmotion: 'lonely',
        feeling: 0,
        intensity: 1,
      },
      {
        mainEmotion: 'scared',
        subEmotion: 'confused',
        feeling: -1,
        intensity: 3,
      },
    ],
  },
  {
    date: '2023-05-23',
    emotions: [
      {
        mainEmotion: 'mad',
        subEmotion: 'critical',
        feeling: 1,
        intensity: 1,
      },
      {
        mainEmotion: 'sad',
        subEmotion: 'lonely',
        feeling: 0,
        intensity: 3,
      },
      {
        mainEmotion: 'scared',
        subEmotion: 'confused',
        feeling: -1,
        intensity: 1,
      },
    ],
  },

  {
    date: '2023-05-24',
    emotions: [
      {
        mainEmotion: 'peaceful',
        subEmotion: 'content',
        feeling: 1,
        intensity: 1,
      },
      {
        mainEmotion: 'joyful',
        subEmotion: 'energetic',
        feeling: 1,
        intensity: 2,
      },
      {
        mainEmotion: 'powerful',
        subEmotion: 'hopeful',
        feeling: 0,
        intensity: 3,
      },
    ],
  },
  {
    date: '2023-05-25',
    emotions: [
      {
        mainEmotion: 'peaceful',
        subEmotion: 'nurturing',
        feeling: 1,
        intensity: 5,
      },
      {
        mainEmotion: 'joyful',
        subEmotion: 'energetic',
        feeling: 1,
        intensity: 4,
      },
      {
        mainEmotion: 'powerful',
        subEmotion: 'hopeful',
        feeling: 1,
        intensity: 2,
      },
    ],
  },
];

export const DUMMY_LARGE_EMOTION = [
  { value: 'sad', label: '슬퍼요', labelShort: '슬픔' },
  { value: 'scared', label: '무서워요', labelShort: '공포' },
  { value: 'powerful', label: '강해요', labelShort: '강함' },
  { value: 'peaceful', label: '평화로워요', labelShort: '온화' },
  { value: 'mad', label: '화가 나요', labelShort: '화남' },
  { value: 'joyful', label: '기뻐요', labelShort: '기쁨' },
];

export const DUMMY_MEDIUM_EMOTION = [
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
