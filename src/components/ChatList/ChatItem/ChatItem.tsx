import React from 'react';
import * as S from './styles';
import { IChatList } from 'types';
import { dateConverter } from 'utils/dateConverter';
import { ProfileImage } from 'components';

interface Prop {
  chatItem: IChatList;
}

export const ChatItem = ({ chatItem }: Prop) => {
  const {
    with_user: { profile_image_url, name },
    last_content,
    last_chatted_at
  } = chatItem;

  return (
    <S.ChatItemContainer>
      <ProfileImage size="50" url={profile_image_url} />
      <S.ChatPreview>
        <p className="chat_user">
          {name}
          <span className="last_chatted_at">
            {dateConverter(last_chatted_at)}
          </span>
        </p>
        <p className="last_content">{last_content}</p>
      </S.ChatPreview>
    </S.ChatItemContainer>
  );
};
