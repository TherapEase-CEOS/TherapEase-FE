interface buttonProps {
  icon?: React.ReactNode;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const ButtonLarge = ({
  text,
  onClick,
  disabled = false,
}: buttonProps) => {
  return (
    <button
      className={`w-[369px] h-[62px] text-heading3 rounded-[48px] ${
        disabled ? 'text-white bg-gray-6' : 'text-black bg-yellow-100'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonMedium = ({
  text,
  onClick,
  disabled = false,
}: buttonProps) => {
  return (
    <button
      className={`w-[321px] h-[62px] text-heading3 rounded-[48px] ${
        disabled ? 'text-white bg-gray-6' : 'text-black bg-yellow-100'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonSmall = ({ icon, text, onClick }: buttonProps) => {
  return (
    <button
      className={
        'w-fit y-fit text-[14px] px-[10px] py-[8px] rounded-[8px] flex justify-center items-center gap-[8px] text-white bg-gray-9'
      }
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
