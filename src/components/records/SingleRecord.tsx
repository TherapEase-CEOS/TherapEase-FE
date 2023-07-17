import { useState } from 'react';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { parseDateString } from '@/utils/parseDate';

import { IEmotion, IRecord } from '@/interfaces/interfaces';

import { EMOTIONS, FEELING } from '@/constants/records';

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
      className="w-full flex flex-col border-t-[2px] border-gray-3"
    >
      <div className="w-full h-[71px] flex items-center">
        <div className="text-body1 ml-[24px] mr-[68px]">
          {parseDateString(Object.keys(record)[0])}
        </div>
        <div className="flex gap-[22px]">
          {Object.values(record)[0].emotions?.map(
            (emotion: IEmotion, idx: number) => {
              let bgColorArray = [0, 0, 0, 0, 0];
              for (let i = 1; i <= emotion.intensity; i++) {
                bgColorArray[i - 1] = i * 20;
              }

              const feelingColor =
                emotion.feeling === -1
                  ? 'green'
                  : emotion.feeling === 0
                  ? 'gray'
                  : 'blue';

              return (
                <div
                  key={idx}
                  className="h-[38px] flex items-center px-[15px] py-[8px] border-[1px] border-gray-3 rounded-[4px] gap-[7px]"
                >
                  <span className="px-[6px] py-[5px] text-label1 border-transparent rounded-[4px] bg-yellow-100">
                    {emotion.mainEmotion}
                  </span>

                  <div className="flex gap-[1.5px]">
                    {bgColorArray.map((color: number, idx: number) => {
                      const bgColor = color
                        ? `bg-${feelingColor}-${color}`
                        : 'bg-gray-2';
                      return (
                        <div
                          key={idx}
                          className={`w-[14px] h-[14px] rounded-[3px] ${bgColor}`}
                        ></div>
                      );
                    })}
                  </div>

                  <span
                    className={`px-[6px] py-[5px] text-label1 border-transparent rounded-[4px] ${
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
              className="flex items-center gap-[6px] ml-auto mr-[23px] cursor-pointer"
              onClick={handleDetailShow}
            >
              <div className="text-gray-8">답변 보기</div>
              {isDetailShow ? (
                <BsChevronUp size={12} color={'#737373'} />
              ) : (
                <BsChevronDown size={12} color={'#737373'} />
              )}
            </div>
          ) : (
            <div className="flex items-center ml-auto mr-[42px]">
              <div className="text-gray-4">답변 보기</div>
            </div>
          ))}
      </div>

      {/* 답변 보기 디테일 */}
      {isDetailShow && (
        <div className="w-[829px] ml-[158px] text-body3 text-gray-9 bg-gray-1 px-[12px] py-[17px] mb-[20px] rounded-[4px] flex flex-col ">
          <span>어떤 상황이었나요?</span>
          <span
            className={`mt-[10px] mb-[17.94px] ${
              Object.values(record)[0].details1 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {Object.values(record)[0].details1 ?? '응답 없음'}
          </span>
          <span>어떤 생각을 했나요?</span>
          <span
            className={`mt-[10px] mb-[17.94px] ${
              Object.values(record)[0].details2 ? 'text-gray-8' : 'text-gray-4'
            }`}
          >
            {Object.values(record)[0].details2 ?? '응답 없음'}
          </span>
          <span>
            부정적인 감정이 있었다면, 어떤 방식으로 감정을 다스렸나요?
          </span>
          <span
            className={`mt-[10px] ${
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
