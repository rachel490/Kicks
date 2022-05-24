import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles';

interface Props {
  userId: number;
}

export const ChatButton = ({ userId }: Props) => {
  const navigate = useNavigate();

  return (
    <Button>
      <ChatIcon className="icon" onClick={() => navigate(`/chat/${userId}`)} />
    </Button>
  );
};
