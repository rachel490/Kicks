import React, { useEffect, useRef, useState } from 'react';
import { IChat } from 'types';
import { MessageItem } from 'components';
import { dividedByDate } from 'utils/dividedByDate';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';
import { useParams } from 'react-router-dom';

interface Prop {
  profile: string;
  messageData: IChat[];
}

type SectionType = { [key: string]: IChat[] };

export const MessageList = ({ profile, messageData }: Prop) => {
  const [sections, setSections] = useState<SectionType>({});
  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    if (messageData) setSections(dividedByDate(messageData));
  }, [messageData]);

  useEffect(() => {
    scrollbarRef.current?.scrollToBottom();
  }, [sections]);

  return (
    <S.MessageListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {Object.entries(sections).map(([date, chatData]) => (
          <S.DateSection key={date}>
            <S.Date>{date}</S.Date>
            {chatData.map((message, i) => (
              <MessageItem key={i} message={message} profile={profile} />
            ))}
          </S.DateSection>
        ))}
      </Scrollbars>
    </S.MessageListContainer>
  );
};
