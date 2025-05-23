import { parseDateString } from '@/utils/parseDate';

import {
  IEmotion,
  IDailyRecord,
  IEmotionRecord,
} from '@/interfaces/interfaces';

import { DUMMY_EMOTION_GRAPH_RECORDS } from '@/constants/DUMMY_DATA';
import { FEELING, LARGE_EMOTION } from '@/constants/records';
import { useEmotionRecords } from '@/hooks/queries/EmotionRecords';

import Image from 'next/image';
import LoadingSpinnerSrc from '../../assets/spinner.gif';

interface Props {
  clientId: string;
}

const RecordGraph = ({ clientId }: Props) => {
  const PAGE = 1;
  const LIMIT = 7;
  const { data, isLoading, isFetching, isStale, isError } = useEmotionRecords(
    clientId,
    1,
    LIMIT,
  );

  const emotionRecordList: IDailyRecord[] = data?.records ?? [];

  return (
    <div className="w-[67.9rem] h-[28.5rem] bg-white rounded-[2rem] pt-[2.653rem] pb-[5rem] px-[2.5rem]">
      {/* 제목 영역 */}
      <div className="flex items-center">
        <span className="text-heading4 text-gray-9">지난 1주일의 통계</span>
        <div className="ml-auto flex items-center gap-[0.5rem] text-body4 text-gray-8">
          <div className="w-[1.4rem] h-[1.4rem] rounded-[0.4rem] bg-green-100"></div>
          <span className="mr-[0.5rem]">부정</span>
          <div className="w-[1.4rem] h-[1.4rem] rounded-[0.4rem] bg-blue-100"></div>
          <span className="mr-[0.5rem]">긍정</span>
          <div className="w-[1.4rem] h-[1.4rem] rounded-[0.4rem] bg-gray-100"></div>
          <span>모름</span>
        </div>
      </div>

      {isLoading ||
        (isFetching && (
          <div className="h-[30rem] flex justify-center items-center">
            <Image
              src={LoadingSpinnerSrc}
              alt="loading..."
              height={100}
              width={100}
            />
          </div>
        ))}

      {isError && (
        <div className="h-[30rem] flex justify-center items-center">
          정보를 가져오지 못했습니다.
        </div>
      )}

      {/* 그래프 영역 */}
      <div className="h-full flex justify-between items-end gap-[1.5rem] px-[0.5rem]">
        {emotionRecordList?.map((dailyRecord: IDailyRecord, idx: number) => {
          const date = parseDateString(dailyRecord.date);
          const emotions = dailyRecord.record?.emotions ?? [];

          return (
            <div
              key={idx}
              className="flex flex-col items-center w-[7rem] h-[28.5rem] justify-end"
            >
              {/* 감정 블록 영역 */}
              <div className="flex gap-[0.4rem] items-end justify-center min-h-[18rem]">
                {emotions.map((emotion, i) => {
                  const { category, intensity, feeling } = emotion;
                  const label =
                    LARGE_EMOTION.find(({ value }) => value === category)
                      ?.labelShort ?? '-';

                  const color =
                    feeling === FEELING.negative.value
                      ? 'green'
                      : feeling === FEELING.unsure.value
                      ? 'gray'
                      : 'blue';

                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-[0.3rem]"
                    >
                      {/* 감정 블록들 */}
                      <div className="flex flex-col-reverse gap-[0.25rem]">
                        {Array.from({ length: intensity }).map((_, idx2) => {
                          const tone = 20 * (idx2 + 1);
                          return (
                            <div
                              key={idx2}
                              className="w-[1.8rem] h-[1.8rem] rounded-[0.3rem]"
                              style={{
                                backgroundColor: `var(--${color}-${tone})`,
                              }}
                            ></div>
                          );
                        })}
                      </div>
                      <span className="text-label2 text-gray-9 text-center mt-[0.2rem]">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* 날짜 표시 */}
              <div className="pt-[1.2rem]">
                <span className="text-body3 text-gray-9">{date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordGraph;
