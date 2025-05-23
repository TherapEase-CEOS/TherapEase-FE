import { useEffect, useState } from 'react';
import Image from 'next/image';
import SingleRecord from './SingleRecord';
import { IDailyRecord } from '@/interfaces/interfaces';
import { useEmotionRecords } from '@/hooks/queries/EmotionRecords';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import LoadingSpinnerSrc from '../../assets/spinner.gif';

import { DUMMY_EMOTION_RECORDS } from '@/constants/DUMMY_DATA';

interface Props {
  clientId: string;
}

const RecordsList = ({ clientId }: Props) => {
  console.log(clientId);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const LIMIT = 7;
  const { data, isLoading, isFetching, isStale, isError } = useEmotionRecords(
    clientId,
    currentPage,
    LIMIT,
  );
  console.log(isStale, data);

  const totalPages = data?.totalPages ?? 1;

  const emotionRecordList: IDailyRecord[] = data?.records ?? [];

  const handleLeftPageClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightPageClick = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-[102.5rem] bg-white rounded-[2rem]">
      {/* 페이지네이션 영역 */}
      <div className="w-full h-[6.8rem] flex items-center ml-[2.5rem]">
        <BsChevronLeft
          size={14}
          color={currentPage === 1 ? '#DCDCDC' : '#737373'}
          cursor={'pointer'}
          onClick={handleLeftPageClick}
        />
        <span className="text-body1 text-gray-9 mx-[1.5rem]">
          {currentPage}
        </span>
        <BsChevronRight
          size={14}
          color={currentPage === totalPages ? '#DCDCDC' : '#737373'}
          cursor={'pointer'}
          onClick={handleRightPageClick}
        />
      </div>
      {/* 감정기록 리스트 영역 */}
      <div>
        {isLoading || isFetching ? (
          <div className="h-[30rem] flex justify-center items-center">
            <Image
              src={LoadingSpinnerSrc}
              alt="loading..."
              height={100}
              width={100}
            />
          </div>
        ) : isError ? (
          <div className="h-[30rem] flex justify-center items-center">
            정보를 가져오지 못했습니다.
          </div>
        ) : (
          emotionRecordList.map((dailyRecord: any, idx: number) => (
            <div key={idx}>
              <SingleRecord dailyRecord={dailyRecord} idx={idx} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecordsList;
