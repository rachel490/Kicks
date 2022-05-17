import * as S from './styles';
import { ReactComponent as FollowIcon } from 'assets/svg/follow.svg';
import { ReactComponent as SaveIcon } from 'assets/svg/save.svg';
import { ReactComponent as UnSaveIcon } from 'assets/svg/unSave.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import { useEffect } from 'react';

export const PlayerMenu = ({
  profile_image_url,
  isShown,
  like_count
}: {
  profile_image_url: string;
  isShown: boolean;
  like_count: number;
}) => {
  return (
    <S.Wrap isShown={isShown}>
      <S.Button>
        <img src={profile_image_url} alt="profile" />
        <FollowIcon className="follow" />
      </S.Button>
      <S.Button>
        <UnSaveIcon className="icon" />
        <p>{like_count}</p>
      </S.Button>
      <S.Button>
        <ChatIcon className="icon" />
      </S.Button>
      <S.Button>
        <MoreIcon className="icon" />
      </S.Button>
    </S.Wrap>
  );
};
