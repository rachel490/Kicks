import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import { ReactComponent as SaveIcon } from 'assets/svg/save.svg';
import { ReactComponent as UnSaveIcon } from 'assets/svg/unSave.svg';
import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';
import { LIKE_API, UNLIKE_API } from 'utils/api';
import { ProfileFollow } from './IconFeature';
import { IVideoItem } from 'types';

interface Prop {
  videoData: IVideoItem;
  isShown: boolean;
  videoId: number;
}

export const PlayerMenu = ({ isShown, videoId, videoData }: Prop) => {
  const [isLiked, setIsLiked] = useState(false);
  const { like_count, user } = videoData;

  useEffect(() => {
    const checkLike = async () => {
      const response = await axios.get(LIKE_API(videoId), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        }
      });
      const data = await response.data;
      if (!(data.message === '동영상 좋아요 등록 여부 조회 성공')) {
        return;
      }
      setIsLiked(data.data.exist_like_video);
    };
    checkLike();
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      const config = {
        method: 'post',
        url: LIKE_API(videoId),
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        }
      };

      axios(config)
        .then(response => {
          if (response.data.message === '동영상에 좋아요 등록 성공') {
            setIsLiked(true);
          }
        })
        .catch(error => console.log(error));
    } else {
      // axios
      //   .delete(UNLIKE_API(id), {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      //     }
      //   })
      //   .then(response => {
      //     console.log(response.data);
      //     setIsLiked(false);
      //   });
    }
  };

  return (
    <S.Wrap isShown={isShown}>
      <ProfileFollow userData={user} />
      <S.Button>
        {isLiked ? (
          <SaveIcon className="icon" onClick={handleLike} />
        ) : (
          <UnSaveIcon className="icon" onClick={handleLike} />
        )}
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
