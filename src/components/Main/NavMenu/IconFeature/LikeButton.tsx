import axios from 'axios';
import { Button } from './styles';
import { useEffect, useState } from 'react';
import { ReactComponent as SaveIcon } from 'assets/svg/save.svg';
import { ReactComponent as UnSaveIcon } from 'assets/svg/unSave.svg';
import { LIKE_API, UNLIKE_API } from 'utils/api';

interface Props {
  videoId: number;
  like_count: number;
}

export const LikeButton = ({ videoId, like_count }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

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
    <Button>
      {isLiked ? (
        <SaveIcon className="icon" onClick={handleLike} />
      ) : (
        <UnSaveIcon className="icon" onClick={handleLike} />
      )}
      <p className="likes">{like_count}</p>
    </Button>
  );
};
