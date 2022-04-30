import React, { useEffect, useRef } from 'react';
import { IChat } from 'data/types';
import { MessageItem } from '../MessageItem/MessageItem';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';

interface Prop {
  sections: { [key: string]: IChat[] };
  profile: string;
  toBottom: boolean;
}

export const MessageList = ({ sections, profile, toBottom }: Prop) => {
  const scrollbarRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const msg = listRef.current.children[0].children[0].children;
      if (toBottom) {
        msg[msg.length - 1].scrollIntoView({
          behavior: 'smooth'
        });
        console.log('smooth');
      } else {
        msg[msg.length - 1].scrollIntoView({
          behavior: 'auto'
        });
      }
    }
  });

  return (
    <S.MessageListContainer ref={listRef}>
      <Scrollbars autoHide ref={scrollbarRef}>
        {Object.entries(sections).map(([date, messages]) => (
          <S.DateSection key={date}>
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
