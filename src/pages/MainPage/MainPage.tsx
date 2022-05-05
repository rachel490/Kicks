import { PlayerMenu, VideoPlayer } from 'components';
import * as S from './styles';

export const MainPage = () => {
  return (
    <S.Wrap>
      <VideoPlayer />
      <PlayerMenu />
    </S.Wrap>
  );
};
