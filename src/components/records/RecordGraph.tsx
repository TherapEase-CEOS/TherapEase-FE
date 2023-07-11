interface Props {
  clientId: string;
}

const RecordGraph = ({ clientId }: Props) => {
  return <div className="w-[679px] h-[285px] bg-white">{clientId} 그래프</div>;
};

export default RecordGraph;
