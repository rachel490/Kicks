import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChatItem } from 'components';
import { IChatUser } from 'types';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';
import { EmptyChat } from '../EmptyChat/EmptyChat';

interface Prop {
  chatList: IChatUser[];
}

export const ChatList = ({ chatList }: Prop) => {
  const scrollbarRef = useRef(null);

  return chatList.length ? (
    <S.ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {chatList.map((room, i) => {
          const iamBuyer = localStorage.getItem('name') === room.buyerName;
          const id = iamBuyer ? room.sellerId : room.buyerId;
          return (
            <Link to={`/chat/${id}`} key={i}>
              <ChatItem chatItem={room} />
            </Link>
          );
        })}
      </Scrollbars>
    </S.ChatListContainer>
  ) : (
    <EmptyChat />
  );
};
