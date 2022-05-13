import * as S from './styles';
import { ReactComponent as FollowIcon } from 'assets/svg/follow.svg';
import { ReactComponent as SaveIcon } from 'assets/svg/save.svg';
import { ReactComponent as UnSaveIcon } from 'assets/svg/unSave.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';

export const PlayerMenu = ({
  profile_image_url
}: {
  profile_image_url: string;
}) => {
  return (
    <S.Wrap>
      <S.Nav>
        <S.Button>
          <img src={profile_image_url} alt="profile" />
          <FollowIcon />
        </S.Button>
        <S.Button>
          <UnSaveIcon className="icon" />
        </S.Button>
        <S.Button>
          <ChatIcon className="icon" />
        </S.Button>
        <S.Button>
          <MoreIcon className="icon" />
        </S.Button>
      </S.Nav>
    </S.Wrap>
  );
};
