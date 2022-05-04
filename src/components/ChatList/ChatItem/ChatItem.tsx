import React from 'react';
import * as S from './styles';
import { IChatList } from 'data/types';

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
      <img src={profile_image_url} alt={name} />
      <S.ChatPreview>
        <p className="chat_user">{name}</p>
        <p className="last_content">{last_content}</p>
      </S.ChatPreview>
    </S.ChatItemContainer>
  );
};
