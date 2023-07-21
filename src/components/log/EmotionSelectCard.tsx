interface EmotionSelectCardProps {
  emotionList: { value: string; label: string }[];
  selectedEmotion?: { value: string; label: string };
  // setSelectedEmotion?: ({ value: string; label: string }) => void;
  setSelectedEmotion?: any; // TODO - 타입 해결
}

interface SingleEmotionCardProps {
  text: string;
  isSelected?: boolean;
}

export const EmotionSelectCard = ({
  emotionList,
  selectedEmotion,
  setSelectedEmotion,
}: EmotionSelectCardProps) => {
  return (
    <div className="w-[33.2rem] h-fit bg-white px-[1.2rem] py-[1rem] rounded-[2rem] flex flex-wrap gap-[0.8rem]">
      {emotionList.map((emotion) => {
        return (
          <div
            onClick={() => {
              selectedEmotion === emotion
                ? setSelectedEmotion({
                    value: '',
                    label: '',
                  })
                : setSelectedEmotion(emotion);
            }}
          >
            <SingleEmotionCard
              text={emotion.label}
              isSelected={selectedEmotion?.value === emotion.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export const SingleEmotionCard = ({
  text,
  isSelected = false,
}: SingleEmotionCardProps) => {
  return (
    <span
      className={`w-[15rem] h-[8.5rem] flex justify-center items-center text-body1 border rounded-[2rem] cursor-pointer select-none ${
        isSelected
          ? 'text-gray-9 bg-yellow-100 border-yellow-120'
          : 'text-gray-7 bg-white border-gray-3 hover:bg-yellow-20 hover:border-yellow-100'
      }`}
    >
      {text}
    </span>
  );
};

export const EmotionSelectCardDisabled = ({ text }: { text: string }) => {
  return (
    <div className="w-[33.4rem] h-[29.2rem] text-body2 text-gray-5 bg-gray-3 rounded-[2rem] flex justify-center items-center select-none">
      {text}
    </div>
  );
};
