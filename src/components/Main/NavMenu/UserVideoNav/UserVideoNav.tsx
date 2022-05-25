import {
  ChatButton,
  LikeButton,
  MoreButton,
  ProfileFollow
} from '../IconFeature';
import * as S from './styles';
import { IVideoItem } from 'types';

interface Prop {
  videoData: IVideoItem;
  isShown: boolean;
}

export const UserVideoNav = ({ isShown, videoData }: Prop) => {
  const { like_count, user, id } = videoData;

  return (
    <S.Wrap isShown={isShown}>
      <ProfileFollow userData={user} />
      <LikeButton videoId={id} like_count={like_count} />
      <ChatButton userId={user?.id} />
      <MoreButton />
    </S.Wrap>
  );
};
