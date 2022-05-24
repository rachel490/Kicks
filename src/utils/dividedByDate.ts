import { IChat } from 'types';
import dayjs from 'dayjs';

export const dividedByDate = (messages: IChat[]) => {
  const sections: { [key: string]: IChat[] } = {};
  messages.forEach(message => {
    const date = dayjs(message.createAt).format('YYYY년 MM월 DD일');
    if (Array.isArray(sections[date])) {
      sections[date].unshift(message);
    } else {
      sections[date] = [message];
    }
  });
  return Object.entries(sections).reverse();
};
