// TimeTable Page
import Profile from '@/components/timetable/Profile';
import TimeTable from '@/components/timetable/TimeTable';
import Image from 'next/image';
import CalendarIconSrc from '../../assets/icons/calendar.svg';

const TimeTablePage = () => {
  return (
    <div
      className="w-full h-full flex flex-row justify-center items-start 
    gap-4  mt-[6.6rem]"
    >
      <div className="flex flex-col gap-4 ">
        <Profile />
        <EditBtn />
      </div>
      <div
        className="w-[75rem] h-[77.6rem] rounded-2xl bg-white flex
        flex-col  py-[2.6rem] px-[5rem]"
      >
        <div className="flex flex-col justify-center mb-[2.5rem]">
          <span className="text-heading4 text-black">상담 가능 시간</span>
          <span className="text-body3 text-gray-5">
            실시간 예약 가능 시간과 차이가 있을 수 있습니다.
          </span>
          <span className="text-body3 text-gray-5">
            5월 24일 05시 32분 업데이트
          </span>
        </div>
        <TimeTable />
      </div>
    </div>
  );
};

const EditBtn = () => {
  return (
    <div
      className="w-[26rem] h-[4rem] bg-yellow-20 px-[3.9rem] py-[0.8rem] gap-2 rounded-lg
    flex flex-row cursor-pointer"
    >
      <Image src={CalendarIconSrc} alt="calendar" />
      <span className="text-body3 text-yellow-120 ">
        시간표 및 상담정보 수정하기
      </span>
    </div>
  );
};

export default TimeTablePage;
