// TimeTable Page
import { useState } from 'react';
import { useRouter } from 'next/router';

import Profile from '@/components/timetable/Profile';
import TimeTable from '@/components/timetable/TimeTable';
import Image from 'next/image';

import CalendarIconSrc from '../../assets/icons/calendar.svg';
import { DUMMY_PROFILE, DUMMY_TIMETABLE } from '@/constants/DUMMY_DATA';

import { queryKeys } from '@/constants/queryKeys';
import {
  useCounselorInfo,
  useUpdateCounselorInfo,
} from '@/hooks/queries/Counselor';

import { TimetableContext } from '@/hooks/TimetableContext';
import {
  ICounselorInfoResponse,
  ICounselorProfile,
  ITimeTable,
  IUser,
} from '@/interfaces/interfaces';

import { useRecoilValue } from 'recoil';
import { userState } from '@/store/user';
import { Roles } from '@/constants/constants';

// 변경 요청을 보내기 위해서 클라이언트 상태를 관리해야함.
const TimeTablePage = () => {
  const router = useRouter();
  const { counselorId } = router.query;

  const user = useRecoilValue<IUser | null>(userState); // 로그인 여부

  const [editableProfile, setEditableProfile] =
    useState<ICounselorProfile>(DUMMY_PROFILE);
  const [editableTimetable, setEditableTimetable] =
    useState<ITimeTable>(DUMMY_TIMETABLE);

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div
      className="w-full h-full flex flex-row justify-center items-start 
    gap-4  mt-[6.6rem] box-border"
    >
      <div className="flex flex-col gap-4">
        <Profile
          isEditMode={isEditMode}
          setEditableProfile={setEditableProfile}
          editableProfile={editableProfile}
        />

        {user?.role === Roles.COUNSELOR && (
          <EditBtn
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            editableProfile={editableProfile}
            editableTimetable={editableTimetable}
          />
        )}
      </div>

      <div
        className="w-[75rem] h-[77.6rem] rounded-2xl bg-white flex
        flex-col  py-[2.6rem] px-[5rem]"
      >
        <div className="flex flex-col justify-center mb-[2.5rem]">
          <span className="text-heading3 text-black">상담 가능 시간</span>
          <span className="text-body3 text-gray-5">
            실시간 예약 가능 시간과 차이가 있을 수 있습니다.
          </span>
          {/*<span className="text-body4 text-gray-5">업데이트</span>*/}
        </div>
        <TimetableContext.Provider
          value={{
            editableTimetable: editableTimetable,
            setEditableTimetable: setEditableTimetable,
          }}
        >
          <TimeTable
            isEditMode={isEditMode}
            editableTimetable={editableTimetable}
            setEditableTimetable={setEditableTimetable}
          />
        </TimetableContext.Provider>
      </div>
    </div>
  );
};

const EditBtn = ({
  isEditMode,
  setIsEditMode,
  editableProfile,
  editableTimetable,
}: {
  isEditMode: boolean;
  setIsEditMode: (value: boolean) => void;
  editableProfile: ICounselorProfile;
  editableTimetable: ITimeTable;
}) => {
  const router = useRouter();
  const { id: counselorId } = router.query;

  const { mutate } = useUpdateCounselorInfo(counselorId as string);

  const handleOnClickBtn = () => {
    if (isEditMode) {
      // 데이터 저장 요청
      setIsEditMode(false);
      const formData: ICounselorInfoResponse = {
        timetable: editableTimetable,
        counselorProfile: editableProfile,
      };
      mutate(formData);
    } else {
      // 수정모드 진입
      setIsEditMode(true);
    }
  };
  const btnText = isEditMode
    ? '시간표 및 상담정보 적용하기'
    : '시간표 및 상담정보 수정하기';

  const btnBg = isEditMode ? 'bg-yellow-100' : 'bg-yellow-20';

  return (
    <button
      className={`w-[26rem] h-[4rem] ${btnBg} px-[3.9rem] py-[0.8rem]  rounded-lg
     cursor-pointer hover:outline hover:outline-1  hover:outline-yellow-120`}
      onClick={handleOnClickBtn}
    >
      <div className="flex flex-row items-center gap-2">
        <Image src={CalendarIconSrc} alt="calendar" />
        <span className="text-body3 text-yellow-120 ">{btnText}</span>
      </div>
    </button>
  );
};

export default TimeTablePage;
