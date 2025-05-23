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

import { useClientList } from '@/hooks/queries/Counselor';
import { DUMMT_CLIENT } from '@/constants/DUMMY_DATA';
/*
1. 상담사 -> 좌측 내담자 목록이 있고 여기서 누구를 선택하느냐에 따라서 focus 된 내담자가 바뀜. 
=> 하위 컴포넌트에 다른 내담자 id 를 주어 fetching 하기 

*/
const RecordsPage = () => {
  const router = useRouter();

  const user = useRecoilValue<IUser | null>(userState); // 로그인 여부

  const { data: clientList, isLoading, isError } = useClientList();
  console.log(clientList);

  const [selectedClientId, setSelectedClientId] = useState<string>('');

  const currentClientInfo = clientList?.find(
    (client: IClient) => client.clientId === selectedClientId,
  );

  useEffect(() => {
    if (clientList && clientList.length > 0) {
      console.log('초기 설정됨:', clientList[0].clientId);
      setSelectedClientId(clientList[0].clientId); // 최초 접속 시 첫 번째 유저 선택
    }
  }, [clientList]);

  if (isLoading || !clientList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full flex">
      <LeftBar
        selectedClientId={selectedClientId}
        clientList={clientList}
        setSelectedClientId={setSelectedClientId}
      />

      {/* 메인 영역 */}
      <main
        className={`w-[calc(100%-0.5rem)] h-full flex flex-col items-center mt-[6.738rem] mb-[3.7rem] gap-[1.6rem]
        ml-[13.9rem]`}
      >
        <div className="w-[102.5rem] flex gap-[1.7rem]">
          {selectedClientId && <RecordGraph clientId={selectedClientId} />}

          {selectedClientId && (
            <ClientCard clientInfo={currentClientInfo as IClient} />
          )}
        </div>

        {selectedClientId && <RecordsList clientId={selectedClientId} />}
      </main>
    </div>
  );
};

export default RecordsPage;
