import React, { useState } from 'react';
import { ContentsItem } from 'components';
import useSWR from 'swr';
import { fetcherWithToken } from 'utils/swr';
import { ADMIN_CONTENT_API } from 'utils/api';
import { IVideoListItem } from 'types';
import { Loading } from 'components';
import * as S from './styles';
import { AdminContainer, PageOption } from 'pages/Admin/AdminUserPage/styles';

export const AdminContentPage = () => {
  const [column, setColumn] = useState('five');
  const { data: videos } = useSWR(
    ADMIN_CONTENT_API(0, 0, ''),
    fetcherWithToken
  );
  const videoListData = videos?.data as IVideoListItem[];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumn(e.target.value);
  };

  return (
    <AdminContainer>
      <PageOption>
        <S.DropDown
          name="column"
          id="column"
          value={column}
          onChange={handleChange}
        >
          <option value="" disabled>
            정렬
          </option>
          <option value="three">3개씩 보기</option>
          <option value="five">5개씩 보기</option>
          <option value="ten">10개씩 보기</option>
        </S.DropDown>
      </PageOption>
      <S.ContentsContainer className={`${column}`}>
        {videoListData ? (
          videoListData.map(item => (
            <ContentsItem
              key={item.id}
              id={item.id}
              thumbnail_url={item.thumbnail_url}
              title="sneakers"
              nickname="Rachel"
              column={column}
            />
          ))
        ) : (
          <Loading />
        )}
      </S.ContentsContainer>
    </AdminContainer>
  );
};
