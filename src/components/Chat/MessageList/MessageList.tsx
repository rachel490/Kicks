import React, { useRef } from 'react';
import { IChat } from 'data/types';
import { MessageItem } from '../MessageItem/MessageItem';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';

interface Prop {
  sections: { [key: string]: IChat[] };
  profile: string;
}

export const MessageList = ({ sections, profile }: Prop) => {
  const scrollbarRef = useRef(null);

  return (
    <S.MessageListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {Object.entries(sections).map(([date, messages]) => (
          <S.DateSection>
            <S.Date>{date}</S.Date>
            {messages.map((message, i) => (
              <MessageItem key={i} message={message} profile={profile} />
            ))}
          </S.DateSection>
        ))}
      </Scrollbars>
    </S.MessageListContainer>
  );
};
