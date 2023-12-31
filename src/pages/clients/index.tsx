import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { clientsListState } from '../../store/user';
import Image from 'next/image';

import LoadingSpinnerSrc from '../../assets/spinner.gif';
import { IClient } from '@/interfaces/interfaces';
import ClientCard from '@/components/ClientCard';
import { ButtonLarge, ButtonSmall } from '@/components/Buttons';

import { IoMdPersonAdd } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';
import Alert from '@/components/Alert';
import ConfirmModal from '@/components/modals/ConfirmModal';

import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';
import {
  getClient,
  addClient,
  changeCounseleeStatus,
  deleteClient,
} from '@/hooks/queries/client';
import { queryKeys } from '@/constants/queryKeys';

const ClientsPage = () => {
  const [clientsList, setClientsList] =
    useRecoilState<IClient[]>(clientsListState);

  const { data, isLoading, isLoadingError } = useQuery(
    [queryKeys.clientList],
    getClient,
    {
      onSuccess: (data) => {
        console.log(data);
        setClientsList(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
  const [addInputValue, setAddInputValue] = useState<string>('');

  const clientMutation: UseMutationResult<IClient, any, string> = useMutation(
    async (type: string) => {
      switch (type) {
        case 'add':
          var body = { code: addInputValue };
          console.log(body);
          return await addClient(body);
        case 'delete':
          return await deleteClient(selectedClient.id);

        default:
          return () => selectedClient;
      }
    },
    {
      onError: (error, variable, context) => {
        // error
        console.log(error);
      },
      onSuccess: (data: IClient, variables, context) => {
        console.log('client mutation success', data, variables, context);
        if (variables === 'add') {
          setAddInputValue('');
        }

        // 내담자 목록 refetch
        queryClient.invalidateQueries({
          queryKey: [queryKeys.clientList],
        });
      },
    },
  );

  const queryClient = useQueryClient();

  const [selectedClient, setSelectedClient] = useState<IClient>({
    name: '',
    id: -1,
    code: '',
    start: '',
    progress: false,
    counselingDate: '',
    goal: '',
  });

  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>('');

  const showAlert = (text: string) => {
    setIsAlertVisible(true);
    setAlertText(text);

    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertText('');
    }, 3000);
  };

  // 내담자 검색
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  // 내담자 추가

  const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
  const [isAddValidationError, setIsAddValidationError] =
    useState<boolean>(false);

  console.log(addInputValue);
  const handleAddInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddInputValue(e.target.value);

    setIsAddValidationError(false);
  };

  const handleAddSubmit = () => {
    try {
      // TODO - 내담자 validation api 연동
      // setClientsList()

      clientMutation.mutate('add');

      onCloseAddModal();
      showAlert(`${clientMutation.data?.name}님 추가 완료!`); // counseleeName 수정
    } catch (e) {
      setIsAddValidationError(true);
    }
  };

  const onCloseAddModal = () => {
    setIsAddModalVisible(false);
    setIsAddValidationError(false);
  };

  // 내담자 삭제
  const [isDeleteModalVisible, setIsDeleteModalVisible] =
    useState<boolean>(false);

  const onDeleteClient = (id: number) => {
    // TODO - 내담자 삭제 api 연동
    // TODO - 내담자 리스트 get api 연동

    clientMutation.mutate('delete');
    setIsDeleteModalVisible(false);
  };

  // 내담자 완료
  const onCompleteClient = (id: number) => {
    // TODO - 내담자 완료 api 연동
    // TODO - 내담자 리스트 get api 연동
  };

  return (
    <div
      className="relative w-[calc(100%-20.6rem)] h-[calc(100%-5.81rem)] mx-auto py-[5.953rem]
  "
    >
      {/* 페이지 헤더 영역 */}
      <div className="flex justify-between">
        <div className="flex flex-col ml-[24px]">
          <span className="text-heading2 text-gray-9">내담자 관리</span>
          <span className="text-body3 text-gray-7">
            내담자 목록을 관리하고, 상담 목표를 리마인드하세요.
          </span>
          <span className="text-body3 text-gray-7">
            내담자가 작성한 감정 기록을 참고해 상담의 질을 향상시키세요.
          </span>
        </div>

        <div className="flex h-fit gap-[1.2rem] mt-[0.263rem]">
          <div className="flex items-center gap-[0.8rem] bg-white pl-[1rem] pr-[2rem] py-[0.8rem] rounded-[0.8rem]">
            <CiSearch size={16} color={'#999999'} />
            <input
              className="text-[1.4rem] font-medium leading-[160%] text-gray-5 focus:outline-none"
              value={searchInputValue}
              onChange={handleSearchInputChange}
              placeholder="내담자 검색 ex. 김민수"
              spellCheck="false"
            />
          </div>
          <ButtonSmall
            icon={<IoMdPersonAdd size={16} />}
            text="내담자 추가"
            onClick={() => {
              setIsAddModalVisible(true);
            }}
          />
        </div>
      </div>

      {/* 내담자 카드 리스트 영역 */}
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={LoadingSpinnerSrc}
            alt="Sample GIF"
            width={100}
            height={100}
          />
        </div>
      ) : clientsList.length ? (
        // 내담자 존재
        <div className="w-full flex flex-wrap justify-center gap-[1.6rem] mt-[3.236rem]">
          {clientsList.filter((client: IClient) =>
            client.name.includes(searchInputValue),
          ).length ? (
            // 검색어 일치하는 내담자 존재
            clientsList
              .filter((client: IClient) =>
                client.name.includes(searchInputValue),
              )
              .map((client: IClient) => {
                return (
                  <div className="card" key={client.id}>
                    <ClientCard
                      clientInfo={client}
                      detailMenu={true}
                      setSelectedClient={setSelectedClient}
                      setIsDeleteModalVisible={setIsDeleteModalVisible}
                    />
                  </div>
                );
              })
          ) : (
            // 검색어 일치하는 내담자 존재 x
            <div className="flex flex-col items-center text-heading3 text-gray-5 mt-[22.1rem]">
              <span>일치하는 내담자가 없습니다.</span>
            </div>
          )}
        </div>
      ) : (
        // 내담자 존재 x
        <div className="flex flex-col items-center text-heading3 text-gray-5 mt-[22.1rem]">
          <span>아직 등록된 내담자가 없습니다.</span>
          <span>내담자 추가를 통해 내담자를 추가하세요!</span>
        </div>
      )}

      {/* 내담자 추가 모달 */}
      {isAddModalVisible && (
        <div className="absolute top-0 left-[-10.3rem] w-screen h-full bg-[#0000004d] z-[10000]">
          <div className="absolute top-[calc(50vh-17.78rem)] left-[calc(50vw-31.15rem)] bg-white px-[12.7rem] pt-[2.05rem] pb-[2.45rem] rounded-[2rem] flex flex-col items-center">
            <span className="text-heading3 text-black mb-[5.1rem]">
              내담자 추가
            </span>
            <span className="text-body2 text-gray-9 mb-[2.4rem]">
              추가할 내담자의 코드를 입력하세요
            </span>
            <input
              className={`w-[37rem] text-body1 font-medium ${
                isAddValidationError
                  ? 'text-[#FF4127] bg-[#FFF5F5] border-[#FF4127]'
                  : 'text-gray-9'
              } placeholder:text-gray-5 px-[2.1rem] py-[1.6rem] mb-[5.1rem] border-[.1rem] border-gray-3 rounded-[0.5rem] focus:outline-none`}
              value={addInputValue}
              onChange={handleAddInputChange}
              placeholder="내담자의 발급 코드 입력"
              spellCheck="false"
            />
            <ButtonLarge
              text="추가하기"
              onClick={handleAddSubmit}
              disabled={!addInputValue.length}
            />
          </div>
          <TfiClose
            className="absolute top-[calc(50vh-17.78rem+3.2rem)] left-[calc(50vw+31.15rem-2.6rem-2.5rem)]"
            size={25}
            cursor={'pointer'}
            onClick={onCloseAddModal}
          />
        </div>
      )}

      {/* 내담자 삭제 모달 */}
      {isDeleteModalVisible && (
        <ConfirmModal
          title="내담자 삭제"
          content={
            <>
              <span className="text-heading2">{selectedClient?.name}</span>
              <div>내담자에 대한 정보가 모두 사라집니다!</div>
              <div>정말 삭제하시겠습니까?</div>
            </>
          }
          confirmText="네, 삭제하겠습니다."
          cancleText="아니오, 삭제하지 않겠습니다."
          onConfirm={() => {
            onDeleteClient(selectedClient?.id);
          }}
          onCancle={() => setIsDeleteModalVisible(false)}
        />
      )}

      {/* alert */}
      {isAlertVisible && <Alert text={alertText} />}
    </div>
  );
};

export default ClientsPage;
