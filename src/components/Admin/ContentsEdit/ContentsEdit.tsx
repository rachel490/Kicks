import { Loading } from 'components';
import { IVideoItem } from 'types';
import { AdminContainer, PageOption } from 'pages/Admin/AdminUserPage/styles';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { VIDEO_ITEM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import * as S from './styles';

export const ContentsEdit = () => {
  const { videoId } = useParams();
  const { data: video } = useSWR(VIDEO_ITEM_API(Number(videoId)), fetcher);
  const videoData = video?.data as IVideoItem;
  console.log(videoData);

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
    <AdminContainer>
      {videoData ? (
        <S.Form onSubmit={handleEdit}>
          <PageOption>
            <S.Button type="submit">수정완료</S.Button>
          </PageOption>
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
            <S.TableData>
              <p className="title">Number</p>
              <span>{videoData.id}</span>
            </S.TableData>
            <S.TableData>
              <p className="title">User ID</p>
              <span>{videoData.user.id}</span>
            </S.TableData>
            <S.TableData>
              <p className="title">Nickname</p>
              <span>{videoData.user.name}</span>
            </S.TableData>
            <S.TableData>
              <p className="title">Thumbnail</p>
              <span>
                <img src={videoData.thumbnail_url} alt="" />
              </span>
            </S.TableData>
            <S.TableData>
              <p className="title">Video URL</p>
              <span>
                <a href={videoData.video_url}>{videoData.video_url}</a>
              </span>
            </S.TableData>
          </S.Sub>
        </S.Form>
      ) : (
        <Loading />
      )}
    </AdminContainer>
  );
};
