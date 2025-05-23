import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { TfiClose } from 'react-icons/tfi';
import { ButtonLarge } from '../Buttons'; // 필요 시 수정

import useInput from '@/hooks/useInput';
import { login } from '@/hooks/queries/user';
import { IUser } from '@/interfaces/interfaces';
import { updateUser } from '@/hooks/useUser';
import { userState } from '@/store/user';
import { saveToken } from '@/hooks/useUser';

import { queryKeys } from '@/constants/queryKeys';
import { USER_LOCALSTORAGE_KEY } from '@/constants/constants';

import axiosInstance from '@/utils/\baxiosInstance';
import { Roles } from '@/constants/constants';

interface LoginModalProps {
  closeModal: () => void;
}

export default function LoginModal({ closeModal }: LoginModalProps) {
  const [authCode, handleChangeAuthCode] = useInput('');
  const router = useRouter();

  const [user, setUser] = useRecoilState<IUser | null>(userState);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('login', authCode);
    // 입력값 검증 및 로그인 요청

    try {
      const response = await axiosInstance.post('/auth/login', { authCode });
      console.log(response);
      if (response.status === 200) {
        const { user } = response.data;
        closeModal();
        setUser(user);
        if (user.role === Roles.COUNSELEE) {
          router.push('/client/records');
        } else if (user.role === Roles.COUNSELOR) {
          router.push('/counselor/clients');
        }
      } else {
        console.log(response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="fixed z-[10000] inset-0 w-screen h-full bg-[#0000004d] bg-opacity-75 transition-opacity"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className=" flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <form
          method="POST"
          onSubmit={handleLogin}
          className="relative z-20 w-[62.5rem] h-[35.4rem] px-[12.8rem] py-[2.8rem] bg-white rounded-[2rem] flex flex-col items-center transition-all"
        >
          <label className="text-heading3 text-black mb-[5.1rem]">
            가입코드
          </label>
          <span className="text-body2 text-gray-9 mb-[2.4rem]">
            이메일로 전송드린 발급코드를 입력해 주세요.
          </span>

          <input
            className="w-[37rem] text-body1 font-medium placeholder:text-gray-5 px-[2.1rem] py-[1.6rem] mb-[5.1rem] border-[.1rem] border-gray-3 rounded-[0.5rem] focus:outline-none"
            value={authCode}
            name="authCode"
            onChange={handleChangeAuthCode}
            placeholder="발급코드 입력"
            spellCheck="false"
          />

          <button
            className={`w-[36.9rem] h-[6.2rem] text-heading3 rounded-[4.8rem] ${
              !authCode.toString().length
                ? 'text-white bg-gray-6'
                : 'text-black bg-yellow-100'
            }`}
            type="submit"
            disabled={!authCode.toString().length}
          >
            시작하기
          </button>

          <TfiClose
            className="absolute top-[3.2rem] right-[2.56rem]"
            size={20}
            cursor={'pointer'}
            onClick={closeModal}
          />
        </form>
      </div>
    </div>
  );
}
