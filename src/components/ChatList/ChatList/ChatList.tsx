import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChatItem } from 'components';
import { IChatList } from 'data/types';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';
import { EmptyChat } from '../EmptyChat/EmptyChat';

interface Prop {
  chatList: IChatList[];
}

export const ChatList = ({ chatList }: Prop) => {
  const scrollbarRef = useRef(null);
  return chatList.length ? (
    <S.ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {chatList.map(item => (
          <Link to={`/chat/${item.id}`} key={item.id}>
            <ChatItem chatItem={item} />
          </Link>
        ))}
      </Scrollbars>
    </S.ChatListContainer>
  ) : (
    <EmptyChat />
  );
};
