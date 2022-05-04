import React, { useEffect, useRef, useState } from 'react';
import { IChat } from 'data/types';
import { MessageItem } from 'components';
import { dividedByDate } from 'utils/dividedByDate';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';

interface Prop {
  messages: IChat[];
  profile: string;
  toBottom: boolean;
}

type SectionType = { [key: string]: IChat[] };

export const MessageList = ({ messages, profile, toBottom }: Prop) => {
  const [sections, setSections] = useState<SectionType>({});
  const scrollbarRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setSections(dividedByDate(messages));
  }, [messages]);

  useEffect(() => {
    if (listRef.current && Object.keys(sections).length) {
      const msg = listRef.current?.children[0].children[0].children;
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
