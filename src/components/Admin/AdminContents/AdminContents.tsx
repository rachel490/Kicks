import React from 'react';
import { ContentsItem } from 'components';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';
import { VIDEO_LIST_API } from 'utils/api';
import { IVideo } from 'data/types';
import { Loading } from 'components';
import * as S from './styles';

export const AdminContents = () => {
  const { data: videoListData } = useSWR<IVideo[]>(VIDEO_LIST_API, fetcher);
  return (
    <S.Wrap>
      <S.ContentsContainer>
        {videoListData ? (
          videoListData.map(item => (
            <ContentsItem
              key={item.id}
              thumbnail_url={item.thumbnail_url}
              title={item.title}
              nickname="Rachel"
            />
          ))
        ) : (
          <Loading />
        )}
      </S.ContentsContainer>
    </S.Wrap>
  );
};
