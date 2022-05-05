import { PlayerMenu, VideoPlayer, DescriptionBox, MainHeader } from 'components';
import * as S from './styles';

export const MainPage = () => {
  return (
    <S.Wrap>
      <MainHeader />
      <VideoPlayer />
      <PlayerMenu />
      <DescriptionBox />
    </S.Wrap>
  );
};
