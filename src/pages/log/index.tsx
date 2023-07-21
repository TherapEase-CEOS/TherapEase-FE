import { useState } from 'react';

import {
  EmotionAddCard,
  EmotionAddCardInProgress,
} from '../../components/log/EmotionAddCard';

const RecordsCreatePage = () => {
  return (
    <div className="w-[calc(100%-20.6rem)] h-full mx-auto py-[5.953rem]">
      {/* 페이지 헤더 영역 */}
      <div className="flex flex-col ml-[24px]">
        <span className="text-heading2 text-gray-9">감정 기록하기</span>
        <span className="text-body3 text-gray-7">
          오늘 하루 느꼈던 감정에 대해 기록해주세요.
        </span>
        <span className="text-body3 text-gray-7">
          해당 기록은 상담사가 읽고 다음 상담에 활용될 수 있습니다.
        </span>
      </div>

      <div className="mt-[2.3rem] flex justify-center gap-[1.6rem]">
        <EmotionAddCard />
        <EmotionAddCardInProgress />
        <EmotionAddCard disabled={true} />
      </div>

      <div></div>
    </div>
  );
};

export default RecordsCreatePage;
