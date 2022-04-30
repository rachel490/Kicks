import React, { useState } from 'react';
import { VideoItem } from '../VideoItem/VideoItem';
import * as S from './styles';

const uploadedVideoData = [
  {
    id: 1,
    title: 'bts-1',
    url: 'https://v16-webapp.tiktok.com/dbebd4d0dce4e25f9af6038b62403217/626c42f9/video/tos/alisg/tos-alisg-pve-0037/f748cf238d71466ca6e523e202e633ca/?a=1988&br=2288&bt=1144&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HjzMyq8Z-LcYwe2NoWgml7Gb&l=202204291356290102450401021F3F1023&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajtsZmc6ZmdpPDMzODgzNEApNDVlZWk2PDtpNzppZjQ6ZmcwamlscjQwczNgLS1kLy1zczBfXzEvLy5jLjJjMmFhXl86Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    title: 'bts-2',
    url: 'https://v16-webapp.tiktok.com/5e296b3847616142ecacf86065b5914d/626c42f7/video/tos/alisg/tos-alisg-pve-0037/87b58df4f5b34e0c8ee2008620a59c23/?a=1988&br=2180&bt=1090&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HjzMyq8Z-LcYwe2NoWgml7Gb&l=202204291356290102450401021F3F1023&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anIzb3JtajxmNTMzODgzM0ApM2Y1aTxmZGRoN2Q2ZDRnO2dyLS0yLjMzaWpgLS1kLzRzc2E2MmJiYzMuM15hNDAvXzU6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    title: 'bts-3',
    url: 'https://v16-webapp.tiktok.com/76230cfece6684f14a1723eb852545ca/626c4306/video/tos/alisg/tos-alisg-pve-0037/4da99662abb6452d9e276c82c6b85c77/?a=1988&br=2788&bt=1394&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HjzMyq8Z-LcYwe2NoWgml7Gb&l=202204291356290102450401021F3F1023&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amlreDQ6Zmc0OzMzODgzNEApZDk5aTZnZjxoNzdlZDw1aWdoYWRscjQwX2xgLS1kLy1zcy1iMGE2Ni8uLWJfY2JiNC86Yw%3D%3D&vl=&vr='
  }
];

const likedVideoData = [
  {
    id: 1,
    title: 'twice-1',
    url: 'https://v16-webapp.tiktok.com/e60e0a2bcf7d1dc50d93dbb1db39c751/626c41d3/video/tos/alisg/tos-alisg-pve-0037c001/08f03e0b373d463c8a9b51e3b57d7e2b/?a=1988&br=3724&bt=1862&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HjzMyq8Zv3cYwe2N4hhml7Gb&l=202204291351370102440262292540D19D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3lsZzc6ZmxzPDMzODczNEApNTMzZmQzM2Q7N2hlOztkN2drcGI2cjRnMmNgLS1kMS1zczAwMC1iNl40XmExYy1iMjY6Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    title: 'jessie-1',
    url: 'https://v16-webapp.tiktok.com/5eaab248e7bbc57d822bc520253696b4/626c41f4/video/tos/alisg/tos-alisg-pve-0037/fe5b0cc622d149dc8464b23243fcb1ac/?a=1988&br=3302&bt=1651&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HjzMyq8Z9-cYwe2NW2hml7Gb&l=2022042913520601024406907418408DF1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBrcDk6ZjxwPDMzODgzNEApaTQ8ODo0Zzs6NztnZGVkZ2czaGs2cjRvbmRgLS1kLy1zczBjMWFhNjU0Y19jMTYwXjY6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    title: 'twice-2',
    url: 'https://v16-webapp.tiktok.com/ccd7281ca70c6fabdcadd11535b9ab5c/626c41f4/video/tos/alisg/tos-alisg-pve-0037/328e9bfd9faa4408a78a394d84ce74a7/?a=1988&br=2120&bt=1060&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HjzMyq8Zv3cYwe2N4hhml7Gb&l=202204291351370102440262292540D19D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc5Mzk6ZnhxPDMzODgzNEApaWQzZWgzO2Q4NzRpPGU0N2cwcDJecjRvay1gLS1kLy1zc2NiYTJiXjVhNS5fYjA2NS46Yw%3D%3D&vl=&vr='
  }
];

export const ProfileNavigation = () => {
  const [selectedMenu, setSelectedMenu] = useState<String>('uploaded');
  const [currentVideoRef, setCurrentVideoRef] = useState(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget.dataset;
    value && setSelectedMenu(value);
  };

  return (
    <S.Wrap>
      <S.ProfileNav>
        <button
          className={`${selectedMenu === 'uploaded' ? 'active' : ''}`}
          data-value="uploaded"
          onClick={handleClick}
        >
          Videos
        </button>
        <button
          className={`${selectedMenu === 'liked' ? 'active' : ''}`}
          data-value="liked"
          onClick={handleClick}
        >
          Liked
        </button>
      </S.ProfileNav>
      <S.VideoContent>
        {selectedMenu === 'uploaded'
          ? uploadedVideoData.map(({ id, title, url }) => (
              <VideoItem
                key={id}
                title={title}
                url={url}
                setCurrentVideoRef={setCurrentVideoRef}
                currentVideoRef={currentVideoRef}
              />
            ))
          : likedVideoData.map(({ id, title, url }) => (
              <VideoItem
                key={id}
                title={title}
                url={url}
                setCurrentVideoRef={setCurrentVideoRef}
                currentVideoRef={currentVideoRef}
              />
            ))}
      </S.VideoContent>
    </S.Wrap>
  );
};
