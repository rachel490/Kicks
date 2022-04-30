import React from 'react';
import * as S from './styles';
import { IChat } from 'pages/ChatListPage/types';

interface Prop {
  chatItem: IChat;
}

export const ChatItem = ({ chatItem }: Prop) => {
  const {
    with_user: { profile_image_url, name },
    chats
  } = chatItem;

  return (
    <S.ChatItemContainer>
      <img src={profile_image_url} alt={name} />
      <S.ChatPreview>
        <p className="chat_user">{name}</p>
        <p className="chat_text">{chats[chats.length - 1]}</p>
      </S.ChatPreview>
    </S.ChatItemContainer>
  );
};
