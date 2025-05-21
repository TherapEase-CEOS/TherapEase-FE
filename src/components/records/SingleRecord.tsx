import { useState } from 'react';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { parseDateString } from '@/utils/parseDate';

import {
  IEmotion,
  IDailyRecord,
  IEmotionRecord,
} from '@/interfaces/interfaces';

import { EMOTIONS, FEELING, MEDIUM_EMOTION } from '@/constants/records';

interface Props {
  dailyRecord: IDailyRecord;
  idx: number;
}

const SingleRecord = ({ dailyRecord, idx }: Props) => {
  const isDetailExist =
    dailyRecord?.record?.answer1 ||
    dailyRecord?.record?.answer2 ||
    dailyRecord?.record?.answer3;

  const [isDetailShow, setIsDetailShow] = useState(false);

  const handleDetailShow = () => {
    setIsDetailShow(!isDetailShow);
  };

  if (!dailyRecord?.record) {
    return (
      <div className="w-full h-[7.1rem] flex items-center">
        <div className="text-body1 ml-[2.4rem] mr-[6.8rem]">
          {parseDateString(dailyRecord.date)}
        </div>
        <span className="text-body2 text-gray-4">감정 기록 없음</span>
      </div>
    );
  }

  return (
    <div
      key={idx}
      className="w-full flex flex-col border-t-[.2rem] border-gray-3"
    >
      {/* 감정 기록 라인 */}
      <div className="w-full h-[7.1rem] flex items-center">
        <div className="text-body1 ml-[2.4rem] mr-[6.8rem]">
          {parseDateString(dailyRecord.date)}
        </div>
        <div className="flex gap-[1.2rem]">
          {dailyRecord.record?.emotions?.map(
            (emotion: IEmotion, idx: number) => {
              return (
                <div
                  key={idx}
                  className="w-[24rem] h-[3.8rem] flex items-center justify-center px-[1.5rem] py-[.8rem] border-[.1rem] border-gray-3 rounded-[.4rem] gap-[.7rem]"
                >
                  <span className="px-[.6rem] py-[.5rem] text-label1 border-transparent rounded-[.4rem] bg-gray-2">
                    {
                      // TODO - 로직 개선
                      MEDIUM_EMOTION.find(
                        (emo) => emo.large === emotion.category,
                      )?.medium.find(
                        ({ value }) => value === emotion.subcategory,
                      )?.label
                    }
                  </span>

                  <div className="flex gap-[.15rem]">
                    {Array(5)
                      .fill('')
                      .map((_, idx) => {
                        const color =
                          emotion.feeling === FEELING.negative.value
                            ? 'green'
                            : emotion.feeling === FEELING.unsure.value
                            ? 'gray'
                            : 'blue';
                        const intensity =
                          idx - emotion.intensity > 0 ? 0 : 20 * (idx + 1);

                        return (
                          <div
                            key={idx}
                            className={`w-[1.4rem] h-[1.4rem] rounded-[.3rem]`}
                            style={{
                              backgroundColor: intensity
                                ? `var(--${color}-${intensity}`
                                : '#F7F7F7',
                            }}
                          ></div>
                        );
                      })}
                  </div>

                  <span
                    className={`px-[.6rem] py-[.5rem] text-label1 border-transparent rounded-[.4rem] ${
                      emotion.feeling === FEELING.negative.value
                        ? 'bg-green-100 text-green-text'
                        : emotion.feeling === FEELING.unsure.value
                        ? 'bg-gray-8 text-white'
                        : 'bg-blue-100 text-blue-text'
                    }`}
                  >
                    {FEELING[emotion.feeling].name}
                  </span>
                </div>
              );
            },
          )}
        </div>

        {dailyRecord?.record.emotions &&
          (isDetailExist ? (
            <div
              className="flex items-center gap-[.6rem] ml-auto mr-[2.3rem] cursor-pointer"
              onClick={handleDetailShow}
            >
              <div className="text-body2 text-gray-8">답변 보기</div>
              {isDetailShow ? (
                <BsChevronUp size={12} color={'#737373'} />
              ) : (
                <BsChevronDown size={12} color={'#737373'} />
              )}
            </div>
          ) : (
            <div className="flex items-center ml-auto mr-[4.2rem]">
              <div className="text-body2 text-gray-4">답변 보기</div>
            </div>
          ))}
      </div>

      {/* 답변 보기 디테일 */}
      {isDetailShow && (
        <div className="w-[82.9rem] ml-[15.8rem] text-body3 text-gray-9 bg-gray-1 px-[1.2rem] py-[1.7rem] mb-[2.0rem] rounded-[.4rem] flex flex-col ">
          <span>어떤 상황이었나요?</span>
          <span
            className={`mt-[1.0rem] mb-[1.794rem] ${
              dailyRecord.record?.answer1 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {dailyRecord?.record.answer1 ?? '응답 없음'}
          </span>
          <span>어떤 생각을 했나요?</span>
          <span
            className={`mt-[1.0rem] mb-[1.794rem] ${
              dailyRecord.record?.answer2 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {dailyRecord.record?.answer2 ?? '응답 없음'}
          </span>
          <span>
            부정적인 감정이 있었다면, 어떤 방식으로 감정을 다스렸나요?
          </span>
          <span
            className={`mt-[1.0rem] ${
              dailyRecord.record?.answer3 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {dailyRecord.record?.answer3 ?? '응답 없음'}
          </span>
        </div>
      )}
    </div>
  );
};

export default SingleRecord;
