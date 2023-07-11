// 좌측 네비게이션 바
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useRecoilValue } from 'recoil';
import { clientsListState } from '@/store/recoil';

import { Iclient } from '@/interfaces/interfaces';

const LeftBar = () => {
  const router = useRouter();

  const clientsList = useRecoilValue<Iclient[]>(clientsListState);

  return (
    <aside className="fixed w-[139px] h-full py-[66.38px] bg-gray-3 overflow-y-scroll">
      {clientsList.map((client: Iclient) => {
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
  );
};

export default LeftBar;
