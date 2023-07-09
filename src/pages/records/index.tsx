import Link from 'next/link';
import { useRouter } from 'next/router';

import { DUMMY_CLIENTS_LIST } from '@/constants/DUMMY_DATA';

const RecordsPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex">
      <aside className="fixed w-[139px] h-full py-[66.38px] bg-gray-3 overflow-y-scroll">
        {DUMMY_CLIENTS_LIST.map((client) => {
          const isSelected = client.counseleeId === router.query.id;

          return (
            <Link
              key={client.counseleeId}
              className={`w-full h-[39px] flex justify-center items-center hover:bg-gray-4 ${
                isSelected ? 'bg-gray-4' : 'bg-transparent'
              }`}
              href={{ pathname: '/records', query: { id: client.counseleeId } }}
              as={'/records'}
            >
              <span className="text-body2 cursor-pointer">
                {client.counseleeName}
              </span>
            </Link>
          );
        })}
      </aside>

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
