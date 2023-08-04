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
import { COUNSELOR } from '@/constants/constants';

const RecordsPage = () => {
  const router = useRouter();
  // console.log(router.query);

  const user = useRecoilValue<IUser | null>(userState); // 로그인 여부

  let clientId = router.query.id ? router.query.id : user?.id;
  clientId = clientId?.toString();

  const isSignedIn = user !== null;
  const isCounselor = user?.role === COUNSELOR; // 상담자,내담자 여부
  const isSignedInCounselor = isSignedIn && isCounselor;

  const clientsList = useRecoilValue<IClient[]>(clientsListState);

  const currentClientInfo: IClient = clientsList.find(
    (client) => client.id === parseInt(router.query.id as string),
  ) ?? {
    name: '',
    id: -1,
    start: '',
    progress: false,
    counselingDate: '',
    goal: '',
    code: '',
  };

  if (clientId == undefined) {
    return <div>loading</div>;
  }

  return (
    <div className="w-full h-full flex">
      {/* 사이드 바 영역 */}
      {isSignedInCounselor ? <LeftBar /> : null}

      {/* 메인 영역 */}
      <main
        className={`w-[calc(100%-0.5rem)] h-full flex flex-col items-center mt-[6.738rem] mb-[3.7rem] gap-[1.6rem] ${
          isSignedInCounselor ? 'ml-[13.9rem]' : null
        }`}
      >
        <div className="w-[102.5rem] flex gap-[1.7rem]">
          <RecordGraph clientId={clientId} />

          {isSignedInCounselor ? (
            <ClientCard clientInfo={currentClientInfo} />
          ) : (
            <LogCard onClick={() => router.push('/log')} />
          )}
        </div>

        <RecordsList clientId={clientId} />
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
