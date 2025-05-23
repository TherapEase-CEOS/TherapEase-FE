// 좌측 네비게이션 바
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useRecoilValue } from 'recoil';
import { clientsListState } from '@/store/user';

import { IClient } from '@/interfaces/interfaces';

interface LeftBarProps {
  selectedClientId: string;
  clientList: IClient[];
  setSelectedClientId: any;
}
const LeftBar: React.FC<LeftBarProps> = ({
  clientList,
  selectedClientId,
  setSelectedClientId,
}) => {
  console.log(selectedClientId);

  return (
    <aside className="fixed w-[13.9rem] h-full py-[6.638rem] bg-gray-3 overflow-y-scroll">
      {clientList.map((client: IClient) => {
        const isSelected = client.clientId === selectedClientId;

        return (
          <div
            key={client.clientId}
            className={`w-full h-[3.9rem] flex justify-center items-center hover:bg-gray-4 hover:text-black ${
              isSelected ? 'bg-gray-4' : 'bg-transparent text-gray-4'
            }`}
            //  href={{ pathname: '/records', query: { id: client.counselorId } }}
            onClick={() => setSelectedClientId(client.clientId)}
          >
            <span className="text-body2 cursor-pointer">{client.name}</span>
          </div>
        );
      })}
    </aside>
  );
};

export default LeftBar;
