import { atom } from 'recoil';

export const LoginModalState = atom({
  key: 'loginModalState',
  default: false
});

export const CategoryState = atom<string[]>({
  key: 'categoryState',
  default: []
});
