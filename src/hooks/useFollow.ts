import axios from 'axios';
import { useState } from 'react';
import { FOLLOW_API } from 'utils/api';

export const useFollow = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkFollow = async (videoId: number) => {
    const response = await axios.get(FOLLOW_API(videoId), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    });
    const data = await response.data;
    if (!(data.message === '특정 사용자 팔로잉 여부 조회 성공')) {
      return;
    }
    setIsFollowed(data.data.exist_follow);
    setLoading(false);
  };

  return { isFollowed, setIsFollowed, checkFollow, loading, setLoading };
};
