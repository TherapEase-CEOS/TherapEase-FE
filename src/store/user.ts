import { atom, atomFamily } from 'recoil';
import { IClient, IUser } from '@/interfaces/interfaces';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'userPersist', // localStorage 키 이름
  storage: typeof window !== 'undefined' ? localStorage : undefined,
});
export const userState = atom<IUser | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom], // ✅ persist 연결
});

export const clientsListState = atom<IClient[]>({
  key: 'clientsListState',
  // default: [],
  default: [],
});

// export const currentClientState = atomFamily<Iclient, string>({
//   key: 'currentClientState',
//   default: (id) => {
//     const currentClient = DUMMY_CLIENTS_LIST.find(
//       (client) => client.counseleeId === id,
//     );
//     return currentClient;
//   },
// });
