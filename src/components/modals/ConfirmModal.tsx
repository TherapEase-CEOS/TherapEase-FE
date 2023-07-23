interface Props {
  title: React.ReactNode;
  content: React.ReactNode;
  confirmText: string;
  cancleText: string;
  onConfirm: () => void;
  onCancle: () => void;
}

const ConfirmModal = ({
  title,
  content,
  confirmText,
  cancleText,
  onConfirm,
  onCancle,
}: Props) => {
  return (
    <div className="absolute top-0 left-[-10.3rem] w-screen h-full bg-[#0000004d] z-[10000]">
      <div className="absolute top-[calc(50vh-17.7rem)] left-[calc(50vw-21.65rem)] bg-white px-[4.7rem] py-[3.25rem] rounded-[2rem] flex flex-col items-center">
        <span className="text-heading3 text-gray-9 flex flex-col items-center mb-[3.1rem]">
          {title}
        </span>
        <span className="text-body2 text-gray-9 flex flex-col items-center mb-[3.1rem]">
          {content}
        </span>
        <button
          className={`w-[33.9rem] h-[4.8rem] text-body1 rounded-[4.8rem] text-red-100 hover:bg-red-10`}
          onClick={onConfirm}
        >
          {confirmText}
        </button>
        <button
          className={`w-[33.9rem] h-[4.8rem] text-body1 rounded-[4.8rem] text-gray-5 hover:bg-gray-2`}
          onClick={onCancle}
        >
          {cancleText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
