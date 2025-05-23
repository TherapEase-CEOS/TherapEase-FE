import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { useRecoilState, useResetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

import LoginModal from './modals/LoginModal';
import LogoImage from '../assets/Header-logo.png';

import { userState } from '@/store/user';
import { IUser } from '@/interfaces/interfaces';

import { Roles } from '@/constants/constants';

const Header = () => {
  const router = useRouter();

  const [user, setUser] = useRecoilState<IUser | null>(userState);
  const counselorId = user?.counselorId;

  console.log(user);

  const [visibleLogout, setVisibleLogout] = useState<boolean>(false); // 로그아웃 버튼 표시 여부
  const resetUserState = useResetRecoilState(userState);

  const BUTTON_STYLE = `
  h-fit 
  text-body2 
  select-none 
  whitespace-nowrap 
  min-w-max
`;
  const currentPath = router.asPath;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isTimetablePage = router.asPath.startsWith('/counselor/timetable');

  const handleOnClickLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleOnClickProfile = () => {
    setVisibleLogout((prev) => !prev);
  };

  const logout = () => {
    resetUserState();
    router.push('/');
  };

  useEffect(() => {
    setVisibleLogout(false);
  }, [router.pathname]);

  const renderMenu = () => {
    if (!user) {
      return (
        <Link
          href="/"
          className={`${BUTTON_STYLE} text-gray-9`}
          onClick={handleOnClickLogin}
        >
          로그인 / 회원가입
        </Link>
      );
    }

    const commonTimetable = (
      <Link
        href={`/timetable/${counselorId}`}
        className={`${BUTTON_STYLE} ${
          currentPath.startsWith('/timetable') ? 'text-gray-9' : 'text-gray-4'
        }`}
      >
        상담일정표
      </Link>
    );

    const commonUserProfile = (
      <div className="relative">
        <span
          className={`${BUTTON_STYLE} cursor-pointer text-gray-4 p-[1.0rem] rounded-[.8rem] ${
            visibleLogout && 'bg-gray-2'
          }`}
          onClick={handleOnClickProfile}
        >
          {user?.name}
        </span>
        {visibleLogout && (
          <div
            className="absolute top-[3.6rem] left-[.1rem] py-[1.0rem] px-[1.6rem] text-label1 text-gray-6 bg-white border-solid border-[.1rem] border-gray-3 rounded-[.4rem] cursor-pointer select-none"
            onClick={logout}
          >
            로그아웃
          </div>
        )}
      </div>
    );

    if (user.role === Roles.COUNSELOR) {
      return (
        <>
          <Link
            href="/counselor/clients"
            className={`${BUTTON_STYLE} ${
              currentPath === '/counselor/clients'
                ? 'text-gray-9'
                : 'text-gray-4'
            }`}
          >
            내담자 관리
          </Link>
          <Link
            href="/counselor/client-records"
            className={`${BUTTON_STYLE} ${
              currentPath === '/counselor/client-records'
                ? 'text-gray-9'
                : 'text-gray-4'
            }`}
          >
            내담자 감정 기록
          </Link>
          {commonTimetable}
          {commonUserProfile}
        </>
      );
    }

    if (user.role === Roles.COUNSELEE) {
      return (
        <>
          <Link
            href="/client/records"
            className={`${BUTTON_STYLE} ${
              currentPath === '/client/records' ? 'text-gray-9' : 'text-gray-4'
            }`}
          >
            감정 기록
          </Link>
          {commonTimetable}
          {commonUserProfile}
        </>
      );
    }

    return null;
  };

  return (
    <div className="fixed top-0 flex justify-between items-center w-screen h-[5.81rem] bg-white shadow-shadow z-10">
      {
        /*코드입력모달*/ isLoginModalOpen && (
          <LoginModal closeModal={() => setIsLoginModalOpen(false)} />
        )
      }
      <Link
        className="flex ml-[22.993rem] gap-[.968rem]"
        href={{
          pathname: '/',
        }}
      >
        <div className="relative w-[3.74rem] h-[3.74rem]">
          <Image
            src={LogoImage}
            alt="TherapEase Logo"
            fill={true}
            priority={true}
          />
        </div>
        <span className="h-fit font-logo text-[2.8531rem]">TherapEase</span>
      </Link>
      <div className="flex mr-[21.45rem] gap-[3.6rem]">{renderMenu()}</div>
    </div>
  );
};

const BUTTON_STYLE = 'px-4 py-2 text-body3';

export default Header;
