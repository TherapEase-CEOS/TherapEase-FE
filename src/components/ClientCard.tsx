import { useState } from 'react';

import { IoMdList } from 'react-icons/io';
import { BiSolidPencil } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Iclient } from '@/interfaces/interfaces';

interface Props {
  clientInfo: Iclient;
  detailMenu?: boolean;
}

const ClientCard = ({ clientInfo, detailMenu = true }: Props) => {
  const {
    counseleeName,
    counseleeId,
    start,
    inProgress,
    counselingDate,
    counselingTime,
    goal,
  } = clientInfo;

  const [isDetailMenuClicked, setIsDetailMenuClicked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

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
        <IoMdList size={17} color={'#737373'} />
        <span className="ml-[4px] text-gray-8">상담 목표</span>
        <div
          className="w-[20.96px] h-[20.96px] ml-auto bg-gray-3 rounded-[4.19px] flex items-center justify-center cursor-pointer"
          onClick={() => {}}
        >
          <BiSolidPencil size={10.7} color={'#ACACAC'} />
        </div>
      </div>
      {isEditMode ? null : <div className="mt-[9px] text-gray-8">{goal}</div>}
    </div>
  );
};

export default ClientCard;
