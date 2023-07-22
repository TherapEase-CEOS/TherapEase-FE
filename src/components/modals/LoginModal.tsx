import React, { useState } from 'react';
import InputModal from './InputModal';
import useInput from '@/hooks/useInput';

import { queryKeys } from '@/constants/queryKeys';
import { login } from '@/hooks/queries/user';
import { IUser } from '@/interfaces/interfaces';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
interface LoginModalProps {
  closeModal: () => void;
}

export default function LoginModal({ closeModal }: LoginModalProps) {
  const [code, handleChangeCode] = useInput('');
  const handleOnSubmit = () => {
    // 입력값 검증 및 로그인 요청
    loginMutation.mutate({ code: code as string });
    alert('제출!');
  };

  const loginMutation: UseMutationResult<IUser, any, { code: string }> =
    useMutation(login, {
      onMutate: (variable) => {
        console.log('onMutate', variable);
        // variable : {code: 'xxx'}
      },
      onError: (error, variable, context) => {
        // error
        console.log(error);
      },
      onSuccess: (data: IUser, variables, context) => {
        console.log('login success', data, variables, context);
      },
      onSettled: () => {
        console.log('end');
      },
    });

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
