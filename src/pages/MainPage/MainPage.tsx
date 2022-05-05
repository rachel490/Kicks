import { PlayerMenu, VideoPlayer, DescriptionBox } from 'components';
import * as S from './styles';

export const MainPage = () => {
  return (
    <S.Wrap>
      <VideoPlayer />
      <PlayerMenu />
      <DescriptionBox />
    </S.Wrap>
  );
};
