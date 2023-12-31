import { useState } from 'react';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { parseDateString } from '@/utils/parseDate';

import { IEmotion, IRecord } from '@/interfaces/interfaces';

import { EMOTIONS, FEELING } from '@/constants/records';
import { DUMMY_MEDIUM_EMOTION } from '@/constants/DUMMY_DATA';

interface Props {
  record: IRecord;
  idx: number;
}

const SingleRecord = ({ record, idx }: Props) => {
  const isDetailExist =
    Object.values(record)[0].details1 ||
    Object.values(record)[0].details2 ||
    Object.values(record)[0].details3;

  const [isDetailShow, setIsDetailShow] = useState(false);

  const handleDetailShow = () => {
    setIsDetailShow(!isDetailShow);
  };

  return (
    <div
      key={idx}
      className="w-full flex flex-col border-t-[.2rem] border-gray-3"
    >
      {/* 감정 기록 라인 */}
      <div className="w-full h-[7.1rem] flex items-center">
        <div className="text-body1 ml-[2.4rem] mr-[6.8rem]">
          {parseDateString(Object.keys(record)[0])}
        </div>
        <div className="flex gap-[1.2rem]">
          {Object.values(record)[0].emotions?.map(
            (emotion: IEmotion, idx: number) => {
              return (
                <div
                  key={idx}
                  className="w-[24rem] h-[3.8rem] flex items-center justify-center px-[1.5rem] py-[.8rem] border-[.1rem] border-gray-3 rounded-[.4rem] gap-[.7rem]"
                >
                  <span className="px-[.6rem] py-[.5rem] text-label1 border-transparent rounded-[.4rem] bg-gray-2">
                    {
                      // TODO - 로직 개선
                      DUMMY_MEDIUM_EMOTION.find(
                        (emo) => emo.large === emotion.mainEmotion,
                      )?.medium.find(
                        ({ value }) => value === emotion.subEmotion,
                      )?.label
                    }
                  </span>

                  <div className="flex gap-[.15rem]">
                    {Array(5)
                      .fill('')
                      .map((_, idx) => {
                        const color =
                          emotion.feeling === -1
                            ? 'green'
                            : emotion.feeling === 0
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
                      emotion.feeling === -1
                        ? 'bg-green-100 text-green-text'
                        : emotion.feeling === 0
                        ? 'bg-gray-8 text-white'
                        : 'bg-blue-100 text-blue-text'
                    }`}
                  >
                    {FEELING[emotion.feeling + 1]}
                  </span>
                </div>
              );
            },
          )}
          {!Object.values(record)[0].emotions && (
            <span className="text-body2 text-gray-4">감정 기록 없음</span>
          )}
        </div>

        {Object.values(record)[0].emotions &&
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
              Object.values(record)[0].details1 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {Object.values(record)[0].details1 ?? '응답 없음'}
          </span>
          <span>어떤 생각을 했나요?</span>
          <span
            className={`mt-[1.0rem] mb-[1.794rem] ${
              Object.values(record)[0].details2 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {Object.values(record)[0].details2 ?? '응답 없음'}
          </span>
          <span>
            부정적인 감정이 있었다면, 어떤 방식으로 감정을 다스렸나요?
          </span>
          <span
            className={`mt-[1.0rem] ${
              Object.values(record)[0].details3 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {Object.values(record)[0].details3 ?? '응답 없음'}
          </span>
        </div>
      )}
    </div>
  );
};

export default SingleRecord;
