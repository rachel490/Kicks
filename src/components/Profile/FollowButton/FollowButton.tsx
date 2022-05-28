import { MutatorOptions } from 'swr';
import { FOLLOW_API } from 'utils/api';
import axios from 'axios';
import * as S from './styles';

interface Props {
  mutate: (
    data?: any,
    opts?: boolean | MutatorOptions<any> | undefined
  ) => Promise<any>;
  id: number;
  page: string;
}

export const FollowButton = ({ mutate, id, page }: Props) => {
  const addFollowing = (id: number) => {
    const config = {
      method: 'post',
      url: FOLLOW_API(id),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    };

    axios(config)
      .then(response => {
        if (!(response.data.message === '팔로우 생성 성공')) {
          return;
        }
        mutate();
      })
      .catch(error => alert(error.response.data.message));
  };

  const deleteFollowing = (id: number) => {
    axios
      .delete(FOLLOW_API(id), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        }
      })
      .then(() => {
        mutate();
      })
      .catch(error => console.log(error));
  };

  return page === 'following' ? (
    <S.Button onClick={() => deleteFollowing(id)}>언팔로우</S.Button>
  ) : (
    <S.Button onClick={() => addFollowing(id)}>팔로우</S.Button>
  );
};
