import React, { useState } from 'react';
import InputModal from './InputModal';
import useInput from '@/hooks/useInput';

interface LoginModalProps {
  closeModal: () => void;
}

export default function LoginModal({ closeModal }: LoginModalProps) {
  const handleOnSubmit = () => {
    // 입력값 검증 및 로그인 요청
    alert('제출!');
  };
  const [code, handleChangeCode] = useInput('');
  return (
    <InputModal
      onSubmit={handleOnSubmit}
      title="가입코드 입력"
      body="이메일로 전송드린 발급코드를 입력해 주세요."
      btnText="시작하기"
      inputValue={code as string}
      onChangeValue={handleChangeCode}
      closeModal={closeModal}
    />
  );
}
