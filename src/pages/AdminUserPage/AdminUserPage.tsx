import React, { useState } from 'react';
import { UserDataTable } from 'components';
import USERS from '../../components/Admin/UserDataTable/userData.json';
import * as S from './styles';
import { IUserAdmin } from 'data/types';
import { GoSearch } from 'react-icons/go';

export const AdminUserPage = () => {
  const [userData, setUserData] = useState<IUserAdmin[]>(USERS);
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const searched = USERS.filter(data => {
        const x = Object.values(data).filter(v => v.toString().includes(input));
        return x.length > 0 && data;
      });
      setUserData(searched);
      setInput('');
    }
  };

  return (
    <S.Wrap>
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
        <UserDataTable userData={userData} />
      </S.TableContainer>
    </S.Wrap>
  );
};
