import { useRouter } from 'next/router';

import LeftBar from '@/components/LeftBar';

import { DUMMY_CLIENTS_LIST } from '@/constants/DUMMY_DATA';

const RecordsPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex">
      <LeftBar clientsList={DUMMY_CLIENTS_LIST} />

      <main className="w-[calc(100%-5px)] h-full flex flex-col items-center mt-[67.38px] ml-[139px] gap-[16px]">
        <div className="w-[1025px] flex gap-[17px]">
          <div className="w-[679px] h-[285px] bg-white">그래프</div>
          <div className="w-[332px] h-[285px] bg-white">내담자 카드</div>
        </div>
        <div className="w-[1025px] h-[900px] bg-white rounded-[20px]">
          감정 리스트
        </div>
      </main>
    </div>
  );
};

export default RecordsPage;
