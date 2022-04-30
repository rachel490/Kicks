import React from 'react';
import { Link } from 'react-router-dom';
import { ChatItem } from 'components';
import { IChat } from 'data/types';
import * as S from './styles';

interface Prop {
  chatList: IChat[];
}

export const ChatList = ({ chatList }: Prop) => {
  return (
    <S.ChatListContainer>
      {chatList.map(item => (
        <Link to={`/chat/${item.id}`} key={item.id}>
          <ChatItem chatItem={item} />
        </Link>
      ))}
    </S.ChatListContainer>
  );
};
