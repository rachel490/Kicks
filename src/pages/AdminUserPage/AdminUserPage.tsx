import React, { useState } from 'react';
import { UserDataTable } from 'components';
import * as S from './styles';
import { IUserAdmin } from 'data/types';
import { GoSearch } from 'react-icons/go';
import useSWR from 'swr';
import { ADMIN_USER_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';

export const AdminUserPage = () => {
  const [keyword, setKeyword] = useState('');
  const [input, setInput] = useState('');

  const { data: users } = useSWR(ADMIN_USER_API(keyword), fetcherWithToken);
  const userData = users?.data as IUserAdmin[];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeyword(input);
      setInput('');
    }
  };

  return (
    <S.AdminContainer>
      <S.PageOption>
        <S.SearchUser>
          <input
            type="text"
            placeholder="search"
            value={input}
            onChange={handleChange}
            onKeyDown={handleSearch}
          />
          <GoSearch />
        </S.SearchUser>
      </S.PageOption>
      <S.TableContainer>
        {userData && <UserDataTable userData={userData} />}
      </S.TableContainer>
    </S.AdminContainer>
  );
};
