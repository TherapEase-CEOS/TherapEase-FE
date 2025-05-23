import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useRecoilState } from 'recoil';
import { counselorProfileState } from '@/store/timetable';

import DefaultProfileSrc from '../../assets/images/defatult-profilie.png';
import LoadingSpinnerSrc from '../../assets/spinner.gif';
import Image from 'next/image';
import ProfileData from '../../data/profile.json';
import useInput from '@/hooks/useInput';

import { queryKeys } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { useCounselorProfile } from '@/hooks/queries/Counselor';
import { ICounselorProfile } from '@/interfaces/interfaces';

export default function Profile({
  editableProfile,
  setEditableProfile,
  isEditMode,
}: {
  isEditMode: boolean;
  editableProfile: any;
  setEditableProfile: any;
}) {
  const router = useRouter();
  const { id: counselorId } = router.query;

  const {
    data: profileData,
    isLoading,
    isError,
  } = useCounselorProfile(counselorId as string);

  const profileToDisplay = isEditMode ? editableProfile : profileData;

  // 서버 데이터 받아오면 클라이언트 상태 초기화
  useEffect(() => {
    if (profileData) {
      setEditableProfile(profileData);
    }
  }, [profileData]);

  const handleChangeContact: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setEditableProfile((prev: ICounselorProfile) => {
      return {
        ...prev,
        contact: e.target.value,
      };
    });
  };

  const handleChangeIntroduction: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setEditableProfile((prev: ICounselorProfile) => {
      return {
        ...prev,
        introText: e.target.value,
      };
    });
  };

  if (isLoading) {
    // TODO 로딩 gif 로 변경
    return (
      <div
        className="w-[26rem] h-[44rem] flex flex-col justify-center rounded-2xl items-center bg-white
  pt-[1.6rem] px-[2.1rem]"
      >
        <Image
          src={LoadingSpinnerSrc}
          alt="Sample GIF"
          width={100}
          height={100}
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div
        className="w-[26rem] h-[44rem] flex flex-col justify-center rounded-2xl items-center bg-white
pt-[1.6rem] px-[2.1rem]"
      >
        Load failed
      </div>
    );
  }
  const { name, contact, introText } = profileToDisplay;

  return (
    <div
      className="w-[26rem] h-[44rem] flex flex-col justify-start rounded-2xl items-center bg-white
    pt-[1.6rem] px-[2.1rem]"
    >
      <Image
        src={DefaultProfileSrc}
        alt="TherapEase Logo"
        width={218}
        height={166}
        style={{ marginBottom: '1.4rem' }}
      />
      <span className="text-heading4 text-gray-9 self-start px-[1rem]">
        {name} 상담사
      </span>
      <div className="w-full flex flex-col gap-[9px] ">
        <ContactInputField
          text={contact}
          disabled={!isEditMode}
          handleChangeContact={handleChangeContact}
        />
        <IntroductionInputField
          text={introText}
          disabled={!isEditMode}
          handleChangeIntroduction={handleChangeIntroduction}
        />
      </div>
    </div>
  );
}

const ContactInputField = ({
  text,
  disabled,
  handleChangeContact,
}: {
  text: string;
  disabled: boolean;
  handleChangeContact: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const bgColor = disabled ? 'bg-white' : 'bg-gray-2';
  return (
    <input
      className={`h-[2.5rem] w-full text-body2 text-gray-8 rounded-[8px]
      self-start px-[1rem] ${bgColor} focus:outline-none placeholder:text-body3 placehoder:text-gray-4`}
      onChange={handleChangeContact}
      value={text}
      placeholder="연락처 혹은 이메일을 입력하세요."
      disabled={disabled}
    />
  );
};
const IntroductionInputField = ({
  text,
  disabled,
  handleChangeIntroduction,
}: {
  text: string;
  disabled: boolean;
  handleChangeIntroduction: React.ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  const bgColor = disabled ? 'bg-white' : 'bg-gray-2';
  const characterCnt: number = (text as string)?.length;
  return (
    <div className="relative">
      <textarea
        className={`w-full h-[17.4rem] text-body3 text-gray-6 rounded-[8px] self-start p-[1rem] 
      align-start ${bgColor} resize-none focus:outline-none placeholder:text-body3 placehoder:text-gray-4`}
        onChange={handleChangeIntroduction}
        value={text}
        disabled={disabled}
        maxLength={99}
        placeholder="상담 정보를 입력하세요."
      ></textarea>
      {!disabled && (
        <p className="absolute p-[1rem] bottom-0 right-0 text-body-4 text-gray-4">
          {characterCnt} / 100
        </p>
      )}
    </div>
  );
};
