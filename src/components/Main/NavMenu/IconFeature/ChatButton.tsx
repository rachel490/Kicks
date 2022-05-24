import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { IChatUser } from 'types';
import { CHAT_LIST_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { Button } from './styles';

interface Props {
  userId: number;
}

export const ChatButton = ({ userId }: Props) => {
  const navigate = useNavigate();
  const { data: chats, mutate } = useSWR(CHAT_LIST_API, fetcherWithToken);
  const chatData = chats?.data as IChatUser[];

  const createNewChat = (id: number) => {
    const seller = { sellerId: id };
    axios
      .post(CHAT_LIST_API, JSON.stringify(seller), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
        }
      })
      .then(() => {
        mutate();
        const room = chatData.find(chat => chat.sellerId === id);
        if (room) {
          navigate(`/chat/${room?.id}`);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Button>
      <ChatIcon className="icon" onClick={() => createNewChat(userId)} />
    </Button>
  );
};
