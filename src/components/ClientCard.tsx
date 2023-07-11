import { Iclient } from '@/interfaces/interfaces';

interface Props {
  clientInfo: Iclient | null;
}

const ClientCard = ({ clientInfo }: Props) => {
  return (
    <div className="w-[332px] h-[285px] bg-white">
      {JSON.stringify(clientInfo)} 내담자 카드
    </div>
  );
};

export default ClientCard;
