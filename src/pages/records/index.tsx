import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useRecoilValue } from 'recoil';
import { isSignedInState, isCounselorState } from '@/store/recoil';

import { clientsListState } from '@/store/recoil';

import LeftBar from '@/components/records/LeftBar';
import RecordGraph from '@/components/records/RecordGraph';
import RecordsList from '@/components/records/RecordsList';
import ClientCard from '@/components/ClientCard';
import { ButtonSmall } from '@/components/Buttons';

import { Iclient } from '@/interfaces/interfaces';

import logImage from '../../assets/Emotion-log.png';
import { BiSolidPencil } from 'react-icons/bi';

const RecordsPage = () => {
  const router = useRouter();

  const isSignedIn = useRecoilValue<boolean>(isSignedInState); // 로그인 여부
  const isCounselor = useRecoilValue<boolean | null>(isCounselorState); // 상담자,내담자 여부
  const isSignedInCounselor = isSignedIn && isCounselor;

  const clientsList = useRecoilValue<Iclient[]>(clientsListState);
  const currentClientInfo: Iclient = clientsList.find(
    (client) => client.counseleeId === router.query.id,
  ) ?? {
    counseleeName: '',
    counseleeId: '',
    start: '',
    inProgress: false,
    counselingDate: '',
    counselingTime: '',
    goal: '',
  };

  return (
    <div className="w-full h-full flex">
      {/* 사이드 바 영역 */}
      {isSignedInCounselor ? <LeftBar /> : null}

      {/* 메인 영역 */}
      <main
        className={`w-[calc(100%-5px)] h-full flex flex-col items-center mt-[67.38px] mb-[37px] gap-[16px] ${
          isSignedInCounselor ? 'ml-[139px]' : null
        }`}
      >
        <div className="w-[1025px] flex gap-[17px]">
          <RecordGraph clientId={router.query.id as string} />

          {isSignedInCounselor ? (
            <ClientCard clientInfo={currentClientInfo} />
          ) : (
            <LogCard onClick={() => router.push('/log')} />
          )}
        </div>

        <RecordsList clientId={router.query.id as string} />
      </main>
    </div>
  );
};

export default RecordsPage;

const LogCard = ({ onClick }: any) => {
  return (
    <div className="w-[332px] h-[285px] text-gray-8 text-body4 bg-white flex flex-col justify-center items-center">
      <div className="relative w-[108px] h-[108px] mb-[12px]">
        <Image src={logImage} alt="Log your Emotion" fill={true} />
      </div>
      <span>오늘 무슨 기분을 느끼셨나요?</span>
      <span className="mb-[16px]">저희가 들어드릴게요.</span>
      <ButtonSmall
        icon={<BiSolidPencil />}
        text="감정 기록하기"
        onClick={onClick}
      />
    </div>
  );
};
