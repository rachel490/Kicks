import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChatItem } from 'components';
import { IChatRoom } from 'data/types';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';

interface Prop {
  chatList: IChatRoom[];
}

export const ChatList = ({ chatList }: Prop) => {
  const scrollbarRef = useRef(null);
  return (
    <S.ChatListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {chatList.map(item => (
          <Link to={`/chat/${item.id}`} key={item.id}>
            <ChatItem chatItem={item} />
          </Link>
        ))}
      </Scrollbars>
    </S.ChatListContainer>
  );
};
