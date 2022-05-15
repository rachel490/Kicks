import React, { useState } from 'react';
import * as S from './styles';
import useSWR from 'swr';
import { fetcher } from 'utils/swr';
import { IVideoListItem } from 'data/types';
import { SEARCHED_VIDEO_API, VIDEO_LIST_API } from 'utils/api';
import { AdBanner, AppContainer, PageHeader, VideoList } from 'components';
import { useLocation } from 'react-router-dom';

export const SearchResultPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const location = useLocation();
  const searchedText = (location.state as string) || '';

  const { data: latestVideos } = useSWR(
    SEARCHED_VIDEO_API(searchedText, null),
    fetcher
  );
  const { data: popularVideos } = useSWR(
    SEARCHED_VIDEO_API(searchedText, 'hits'),
    fetcher
  );

  return (
    <S.Wrap>
      <PageHeader title={searchedText} backTo="/search" />
      <AdBanner height="110px" />
      <S.SortByList>
        {['최신순', '인기순'].map((sortBy, i) => (
          <li
            key={i}
            onClick={() => setActiveIdx(i)}
            className={activeIdx === i ? 'active' : ''}
          >
            {sortBy}
          </li>
        ))}
      </S.SortByList>
      {activeIdx ? (
        <VideoList videos={latestVideos?.data} />
      ) : (
        <VideoList videos={popularVideos?.data} />
      )}
    </S.Wrap>
  );
};
