import React from 'react';
import { Link } from 'react-router-dom';
import { ChatItem } from 'components';
import { IChatRoom } from 'data/types';
import * as S from './styles';

interface Prop {
  chatList: IChatRoom[];
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
