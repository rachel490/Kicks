import { Button } from './styles';
import { ReactComponent as MoreIcon } from 'assets/svg/more.svg';

export const MoreButton = () => {
  return (
    <Button>
      <MoreIcon className="icon" />
    </Button>
  );
};
