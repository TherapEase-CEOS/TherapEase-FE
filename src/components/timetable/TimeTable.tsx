import React from 'react';
import { CSSProperties } from 'react';
import TimeTableCol from './TimeTableCol';
import { useRecoilState } from 'recoil';
import { timeTableState } from '@/store/timetable';

export default function TimeTable() {
  return (
    <div className="rounded-2xl bg-white ">
      <div className="grid ">
        <THead />
        <TBody />
      </div>
    </div>
  );
}

const THead = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const tableHeadTextStyle: CSSProperties = {
    color: '#ACACAC',
    textAlign: 'center',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '160%',
  };
  return (
    <div className="grid pb-[0.95rem] grid-cols-7 w-[63rem] border-b-[1px] ">
      {days.map((day) => (
        <th>
          <span style={tableHeadTextStyle}>{day}</span>
        </th>
      ))}
    </div>
  );
};

const TBody = () => {
  // 타임테이블 데이터로 최초 fetching 시에 timetable recoil값 초기화
  const [timeTableData, setTimeTableData] = useRecoilState(timeTableState);
  const days_en = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return (
    <div className="grid w-[63rem] grid-cols-7">
      {days_en.map((day_en) => (
        <TimeTableCol day={day_en} avaliability={timeTableData[day_en]} />
      ))}
    </div>
  );
};

const TimeBar = () => {
  const hourData = Array.from({ length: 16 }, (v, i) => i + 7); // [7 ... 22]

  return (
    <div className=" flex flex-col items-end pr-[1rem] ">
      {hourData.map((hour) => (
        <div className="h-[3.9rem] ">
          <span className="text-body-4 text-gray-4 text-start self-start">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};
