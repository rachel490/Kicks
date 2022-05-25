import React from 'react';
import * as S from './styles';
import { IChat, IChatUser } from 'types';
import { dateConverter } from 'utils/dateConverter';
import { ProfileImage } from 'components';
import useSWR from 'swr';
import { CHAT_ROOM_API, USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';

interface Prop {
  chatItem: IChatUser;
}

export const ChatItem = ({ chatItem }: Prop) => {
  const { buyerId, buyerName, sellerId, sellerName, id } = chatItem;
  const iamBuyer = localStorage.getItem('name') === buyerName;
  const { data: userData } = useSWR(
    USER_DATA_API(iamBuyer ? sellerId : buyerId),
    fetcherWithToken
  );
  const { data: messages } = useSWR(CHAT_ROOM_API(id), fetcherWithToken);
  const lastMessage = messages?.data[0] as IChat;

  return (
    <S.ChatItemContainer>
      <ProfileImage size="50" url={userData?.profile_image_url} />
      <S.ChatPreview>
        <p className="chat_user">
          {iamBuyer ? sellerName : buyerName}
          <span className="last_chatted_at">
            {dateConverter(lastMessage?.createAt)}
          </span>
        </p>
        <p className="last_content">{lastMessage?.content}</p>
      </S.ChatPreview>
    </S.ChatItemContainer>
  );
};
