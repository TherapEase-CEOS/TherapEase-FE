import { useEffect, useState } from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { parseDateString } from '@/utils/parseDate';

import { DUMMY_EMOTION_RECORDS } from '@/constants/DUMMY_DATA';

interface Props {
  clientId: string;
}

const RecordsList = ({ clientId }: Props) => {
  const [emotionRecordList, setEmotionRecordList] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchEmotionRecords();
  }, [clientId]);

  const fetchEmotionRecords = () => {
    // TODO - 감정기록 리스트 조회 API 연동 by {clientId}
    const { page, records } = DUMMY_EMOTION_RECORDS;
    setEmotionRecordList([records]);

    parseDateString(Object.keys(records[0])[0]);

    setPage(page);
  };

  return (
    <div className="w-[1025px] h-[900px] bg-white rounded-[20px] divide-y divide-gray-3">
      {/* 페이지네이션 영역 */}
      <div className="w-full h-[68px] flex items-center ml-[25px]">
        <BsChevronLeft
          size={14}
          color={page === 1 ? '#DCDCDC' : '#737373'}
          cursor={'pointer'}
          onClick={() => setPage(page - 1)}
        />
        <span className="text-body1 text-gray-9 mx-[15px]">{page}</span>
        <BsChevronRight
          size={14}
          color={
            page === Math.ceil(emotionRecordList.length / 7)
              ? '#737373'
              : '#DCDCDC'
          }
          cursor={'pointer'}
          onClick={() => setPage(page + 1)}
        />
      </div>
      {/* 감정기록 리스트 영역 */}
      <div>
        {emotionRecordList.map((record: any) => {
          return <div>{JSON.stringify(record)}</div>;
        })}
      </div>
    </div>
  );
};

export default RecordsList;
