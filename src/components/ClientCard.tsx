import { TextareaHTMLAttributes, useEffect, useState } from 'react';

import { BsList, BsCheckLg } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Iclient } from '@/interfaces/interfaces';

interface Props {
  clientInfo: Iclient;
  detailMenu?: boolean;
}

const ClientCard = ({ clientInfo, detailMenu = false }: Props) => {
  const {
    counseleeName,
    counseleeId,
    start,
    inProgress,
    counselingDate,
    counselingTime,
    goal,
  } = clientInfo;

  const [isDetailMenuClicked, setIsDetailMenuClicked] =
    useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [goalInputValue, setGoalInputValue] = useState<string>(goal);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGoalInputValue(e.currentTarget.value);
  };

  const handleInputSubmit = () => {
    // TODO - api 연동
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    setIsDetailMenuClicked(false);
    setIsEditMode(false);
    setGoalInputValue(goal);
  }, [clientInfo]);

  return (
    <div className="w-[332px] h-[285px] p-[22px] text-body4 text-gray-9 bg-white rounded-[20px] flex flex-col">
      <div className="flex justify-between">
        <span className="text-body1 mb-[3.5px]">{counseleeName}</span>
        {detailMenu && (
          <div
            className={`relative w-[30px] h-[30px] ml-auto rounded-[4.19px] flex items-center justify-center cursor-pointer ${
              isDetailMenuClicked ? 'bg-gray-3' : null
            }`}
            onClick={() => {}}
          >
            <FiMoreHorizontal
              size={24.8}
              color={'#DCDCDC'}
              cursor={'pointer'}
              onClick={() => {
                setIsDetailMenuClicked(!isDetailMenuClicked);
              }}
            />
            {isDetailMenuClicked && (
              <div className="absolute top-[32.5px] left-0 flex flex-col items-center px-[16px] py-[10px] text-gray-6 bg-white border-[1px] border-gray-3 rounded-[4px] shadow-[0_0_8px_0_rgba(0,0,0,0.05)]">
                <span onClick={() => {}}>내담자 삭제</span>
                <div className="w-[56px] h-[1px] my-[8px] bg-gray-4"></div>
                <span onClick={() => {}}>상담 완료</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center mb-[6px] gap-[4px]">
        <span className="px-[6px] rounded-[4px] bg-gray-4">
          {inProgress ? '상담중' : '상담 완료'}
        </span>
        <div className="w-[1px] h-[14px] mx-[4px] bg-gray-4"></div>
        <span className="px-[6px] rounded-[4px] bg-yellow-100">
          {counselingDate}
        </span>
        <span className="px-[6px] rounded-[4px] bg-gray-3">
          {counselingTime}
        </span>
      </div>

      <div className="flex items-center gap-[4px]">
        <span className="px-[6px] rounded-[4px] bg-gray-2">상담시작일</span>
        <div className="w-[1px] h-[14px] mx-[4px] bg-gray-4"></div>
        <span className="px-[6px] rounded-[4px] bg-gray-2">{start}</span>
      </div>
      <hr className="mt-[13px] mb-[12px]"></hr>
      <div className="flex items-center">
        <BsList size={17} color={'#737373'} />
        <span className="ml-[4px] mt-[2px] text-gray-8">상담 목표</span>
        <div
          className={`w-[20.96px] h-[20.96px] ml-auto rounded-[4.19px] flex items-center justify-center cursor-pointer ${
            isEditMode ? 'bg-yellow-100' : 'bg-gray-3'
          }`}
          onClick={handleInputSubmit}
        >
          {isEditMode ? (
            <BsCheckLg size={10.7} color={'#737373'} />
          ) : (
            <BiSolidPencil size={10.7} color={'#ACACAC'} />
          )}
        </div>
      </div>
      {isEditMode ? (
        <div className="relative mt-[9px]">
          <textarea
            className="w-full h-[105px] text-body4 text-gray-9 bg-gray-2 rounded-[4px] px-[5px] py-[3px] resize-none focus:outline-none"
            value={goalInputValue}
            onChange={handleInputChange}
            placeholder="상담 목표를 적어주세요."
            maxLength={99}
            spellCheck="false"
          ></textarea>
          <span className="absolute bottom-[12px] right-[9px] text-label2 text-gray-5 select-none z-10">
            {goalInputValue.length} / 100
          </span>
        </div>
      ) : (
        <div className="mt-[9px] text-gray-8 whitespace-pre-wrap">
          {goalInputValue}
        </div>
      )}
    </div>
  );
};

export default ClientCard;
