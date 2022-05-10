import React, { useState } from 'react';
import { ContentsItem } from 'components';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';
import { VIDEO_LIST_API } from 'utils/api';
import { IVideo } from 'data/types';
import { Loading } from 'components';
import * as S from './styles';

export const AdminContents = () => {
  const { data: videoListData } = useSWR<IVideo[]>(VIDEO_LIST_API, fetcher);
  const [column, setColumn] = useState('five');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColumn(e.target.value);
  };
  return (
    <S.Wrap>
      <S.DropDown name="column" id="column" onChange={handleChange}>
        <option value="" disabled>
          정렬
        </option>
        <option value="three">3개씩 보기</option>
        <option value="five" selected>
          5개씩 보기
        </option>
        <option value="ten">10개씩 보기</option>
      </S.DropDown>
      <S.ContentsContainer className={`${column}`}>
        {videoListData ? (
          videoListData.map(item => (
            <>
              <ContentsItem
                key={item.id}
                id={item.id}
                thumbnail_url={item.thumbnail_url}
                title={item.title}
                nickname="Rachel"
                column={column}
              />
            </>
          ))
        ) : (
          <Loading />
        )}
      </S.ContentsContainer>
    </S.Wrap>
  );
};
