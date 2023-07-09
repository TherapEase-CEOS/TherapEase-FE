import React from 'react';
import DefaultProfileSrc from '../../assets/images/defatult-profilie.png';
import Image from 'next/image';
export default function Profile() {
  const counselor_name = '김지영';
  const contact = '010-1234-5678';
  const description = `
  ex. 6월 첫째주는 학회 워크숍으로 목, 금 상담이 불가합니다. 급한 용무는 문자 주세요!
  고정 업무 시간: 월~금 10시 - 18시`;
  return (
    <div
      className="w-[260px] h-[440px] flex flex-col justify-start rounded-2xl items-center bg-white
    py-[16px] px-5"
    >
      <Image
        src={DefaultProfileSrc}
        alt="TherapEase Logo"
        width={218}
        height={166}
        style={{ marginBottom: '14px' }}
      />

      <span className="text-heading4 text-gray-9 self-start">
        {counselor_name} 상담사
      </span>
      <span className="text-body2 text-gray-4">{description}</span>
      <span className="text-body3 text-gray-4">{description}</span>
    </div>
  );
}
