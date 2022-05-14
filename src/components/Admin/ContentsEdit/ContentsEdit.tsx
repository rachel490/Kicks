import { Loading } from 'components';
import { IVideoItem } from 'data/types';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { VIDEO_ITEM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import * as S from './styles';

export const ContentsEdit = () => {
  const { videoId } = useParams();
  const { data: videoData } = useSWR<IVideoItem>(
    VIDEO_ITEM_API(Number(videoId)),
    fetcher
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ntitle = title ? title : videoData?.title;
    const ndesc = description ? description : videoData?.description;

    console.log(ntitle, ndesc);
  };

  return (
    <>
      {videoData ? (
        <S.Form onSubmit={handleEdit}>
          <S.Button type="submit">수정완료</S.Button>
          <S.Main>
            <img src={videoData.thumbnail_url} alt={videoData.title} />
            <S.InfoContainer>
              <S.InfoBox>
                <S.Label htmlFor="title">Title</S.Label>
                <input
                  type="text"
                  id="title"
                  defaultValue={videoData.title}
                  onChange={handleTitle}
                />
              </S.InfoBox>
              <S.InfoBox>
                <S.Label htmlFor="desc">Description</S.Label>
                <textarea
                  id="desc"
                  onChange={handleDescription}
                  defaultValue={videoData.description}
                />
              </S.InfoBox>
              <S.InfoBox>
                <S.Label>Upload Date</S.Label>
                <span>0000.00.00</span>
              </S.InfoBox>
              <S.StatusBox>
                <S.InfoBox>
                  <S.Label>View</S.Label>
                  <span>{videoData.view_count}</span>
                </S.InfoBox>
                <S.InfoBox>
                  <S.Label>Like</S.Label>
                  <span>823u49823</span>
                </S.InfoBox>
              </S.StatusBox>
            </S.InfoContainer>
          </S.Main>
          <S.Sub>
            <S.InfoBox>
              <S.Label>Number</S.Label>
              <span>{videoData.id}</span>
            </S.InfoBox>
            <S.InfoBox>
              <S.Label>User ID</S.Label>
              <span></span>
            </S.InfoBox>
            <S.InfoBox>
              <S.Label>Nickname</S.Label>
              <span>{videoData.user.name}</span>
            </S.InfoBox>
            <S.InfoBox>
              <S.Label>Thumbnail</S.Label>
              <span>{videoData.thumbnail_url}</span>
            </S.InfoBox>
            <S.InfoBox>
              <S.Label>Video URL</S.Label>
              <span>{videoData.video_url}</span>
            </S.InfoBox>
          </S.Sub>
        </S.Form>
      ) : (
        <Loading />
      )}
    </>
  );
};
