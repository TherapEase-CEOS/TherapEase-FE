// Landing Page
import Image from 'next/image';
import { ButtonLarge } from '@/components/Buttons';
import MainIllustrationSrc from '../assets/images/main-illustration.svg';
import MetalCareIncreaseSrc from '../assets/images/mentalcare-increase.svg';
import TransparentLogoSrc from '../assets/icons/transparent-logo.svg';
import CounseleeManagementSrc from '../assets/images/counselee-management.svg';
import EmotionGraphSrc from '../assets/images/emtion-graph.svg';
import EmotionCreateSrc from '../assets/images/emotion-create.svg';
import TimeTableSrc from '../assets/images/timetable.svg';

const LandingPage = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-[87.7rem] bg-[#252525] flex justify-center items-center">
        <div className="flex flex-row items-center mr-[-5%]">
          <div className="h-[35.6rem] flex flex-col gap-[5.7rem] ">
            <div className="flex flex-col gap-[0.8rem]">
              <p className="font-logo text-title text-white">
                Make your <br /> counseling perfect <br />
                with TherapEase
              </p>
              <p className="text-landingPageBody3 text-white">
                테라피즈와 함께 효과적인 상담을 진행하세요.
              </p>
            </div>
            <ButtonLarge
              text={'지금 시작하기'}
              onClick={() => console.log('click')}
              disabled={false}
            />
          </div>

          <Image
            src={MainIllustrationSrc}
            alt="TherapEase-main-illustration"
            width={873}
            height={791}
          />
        </div>
      </div>
      <div
        className="width-full h-[63.8rem] bg-gray-9 flex
       justify-center items-center"
      >
        <div className="flex flex-col gap-[2.98rem]">
          <span className="font-logo text-landingPageTitle text-white">
            Background
          </span>
          <p className="text-landingPageBody3 text-white">
            대면 심리 상담이 대중화되어가고 있지만, 상담사들의 업무 프로세스를
            도와주는 서비스는 많이 없습니다. 이에 TherapEase는
            <br /> 심리 상담 업무 전반을 아날로그에서 디지털로 옮기고자 합니다.
          </p>
          <Image src={MetalCareIncreaseSrc} alt="metalcare-increase" />
        </div>
      </div>
      <div
        className="width-full h-[36.8rem] bg-gray-9 flex flex-col
       justify-center items-center gap-[1.8rem]"
      >
        <Image src={TransparentLogoSrc} alt="metalcare-increase" />
        <span className="font-logo text-landingPageTitle text-yellow-100">
          About us
        </span>
        <p className="text-landingPageBody2 text-yellow-100 text-center">
          테라피즈는 상담사의 업무 효율을 증진시키기 위한 서비스입니다. 저희는
          상담사와 <br /> 내담자 모두에게 더 나은 심리상담환경을 조성하고자
          합니다.
        </p>
      </div>
      <div
        className="width-full h-[97.6rem] bg-gray-3 flex flex-col
       justify-start items-center gap-[1.8rem] pt-[12rem]"
      >
        {' '}
        <span className="font-logo text-landingPageTitle text-gray-9">
          The Therapist
        </span>
        <p className="text-landingPageBody1 text-gray-9 text-center">
          상담사는 내담자의 감정기록표를 통해 <br />
          내담자를 지속적으로 모니터링하며 케어할 수 있어요.
        </p>
        <div className="flex gap-[1.6rem]">
          <Image src={CounseleeManagementSrc} alt="CounseleeManagementSrc" />
          <Image src={EmotionGraphSrc} alt="EmotionGraphSrc" />
        </div>
      </div>
      <div
        className="width-full h-[97.6rem] bg-[#FDF2B4] flex flex-col
       justify-start items-center gap-[1.8rem] pt-[12rem]"
      >
        {' '}
        <span className="font-logo text-landingPageTitle text-gray-9">
          The Client
        </span>
        <p className="text-landingPageBody1 text-gray-9 text-center">
          내담자는 감정기록표를 통해 자신을 돌아보며, <br />
          상담시간표로 일정을 손쉽게 조율해요.
        </p>
        <div className="flex gap-[1.6rem]">
          <Image src={EmotionCreateSrc} alt="EmotionCreateSrc" />
          <Image src={TimeTableSrc} alt="TimeTableSrc" />
        </div>
      </div>
      <div
        className="width-full h-[27rem] bg-[#333333] flex flex-col
       justify-start items-center gap-[3.5rem] pt-[5.1rem]"
      >
        <span className="text-heading2 text-yellow-100">
          심리 상담, 테라피즈로 시작해보세요.
        </span>
        <ButtonLarge
          text={'지금 시작하기'}
          onClick={() => console.log('click')}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default LandingPage;
