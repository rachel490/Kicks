import React from 'react';
import * as S from './styles';
import { IChatUser } from 'types';
import { dateConverter } from 'utils/dateConverter';
import { ProfileImage } from 'components';
import useSWR from 'swr';
import { USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';

interface Prop {
  chatItem: IChatUser;
}

export const ChatItem = ({ chatItem }: Prop) => {
  const { buyerId, buyerName, sellerId, sellerName } = chatItem;
  const iamBuyer = localStorage.getItem('name') === buyerName;
  const { data: userData } = useSWR(
    USER_DATA_API(iamBuyer ? sellerId : buyerId),
    fetcherWithToken
  );

  return (
    <S.ChatItemContainer>
      <ProfileImage size="50" url={userData?.profile_image_url} />
      <S.ChatPreview>
        <p className="chat_user">
          {iamBuyer ? sellerName : buyerName}
          <span className="last_chatted_at">
            {dateConverter('2022-05-16T01:04:43.091965')}
          </span>
        </p>
        <p className="last_content">구매가능한가요?</p>
      </S.ChatPreview>
    </S.ChatItemContainer>
  );
};
