import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useRecoilValue } from 'recoil';
import { userState } from '@/store/user';

import { clientsListState } from '@/store/user';

import LeftBar from '@/components/records/LeftBar';
import RecordGraph from '@/components/records/RecordGraph';
import RecordsList from '@/components/records/RecordsList';
import ClientCard from '@/components/ClientCard';
import { ButtonSmall } from '@/components/Buttons';

import { IClient } from '@/interfaces/interfaces';

import logImage from '../../assets/Emotion-log.png';
import { BiSolidPencil } from 'react-icons/bi';
import { IUser } from '@/interfaces/interfaces';
import { Roles } from '@/constants/constants';

import { useGetCounselorClients } from '@/hooks/queries/Counselor';
/*
현재 로그인된 내담자의 감정기록 열람/생성
*/
const RecordsPage = () => {
  const router = useRouter();

  const user = useRecoilValue<IUser | null>(userState); // 로그인 여부
  const clientId = '682c9e41e3fce12db8239ffa';
  console.log(user);

  return (
    <div className="w-full h-full flex">
      {/* 메인 영역 */}
      <main
        className={`w-[calc(100%-0.5rem)] h-full flex flex-col items-center mt-[6.738rem] mb-[3.7rem] gap-[1.6rem]`}
      >
        <div className="w-[102.5rem] flex gap-[1.7rem]">
          <LogCard onClick={() => router.push('/log')} />
        </div>

        {clientId && <RecordsList clientId={clientId} />}
      </main>
    </div>
  );
};

export default RecordsPage;

const LogCard = ({ onClick }: any) => {
  return (
    <div className="w-[33.2rem] h-[28.5rem] text-gray-8 text-body4 bg-white rounded-[2rem] flex flex-col justify-center items-center select-none">
      <div className="relative w-[10.8rem] h-[10.8rem] mb-[1.2rem]">
        <Image src={logImage} alt="Log your Emotion" fill={true} />
      </div>
      <span>오늘 무슨 기분을 느끼셨나요?</span>
      <span className="mb-[1.6rem]">저희가 들어드릴게요.</span>
      <ButtonSmall
        icon={<BiSolidPencil />}
        text="감정 기록하기"
        onClick={onClick}
      />
    </div>
  );
};
