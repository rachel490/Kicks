import { ReactComponent as ChatIcon } from 'assets/svg/chat.svg';
import { Button } from './styles';

export const ChatButton = () => {
  return (
    <Button>
      <ChatIcon className="icon" />
    </Button>
  );
};
