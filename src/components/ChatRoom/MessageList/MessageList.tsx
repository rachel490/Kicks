import React, { useEffect, useRef, useState } from 'react';
import { IChat } from 'types';
import { MessageItem } from 'components';
import { dividedByDate } from 'utils/dividedByDate';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';
import { CHAT_ROOM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

interface Prop {
  profile: string;
}

type SectionType = { [key: string]: IChat[] };

export const MessageList = ({ profile }: Prop) => {
  const [sections, setSections] = useState<SectionType>({});
  const scrollbarRef = useRef<Scrollbars>(null);

  const { id } = useParams();
  const { data: chatData } = useSWR(CHAT_ROOM_API(Number(id)), fetcher);

  useEffect(() => {
    if (chatData) setSections(dividedByDate(chatData.chats));
  }, [chatData]);

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
