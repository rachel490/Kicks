import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.locale('ko');
dayjs.extend(relativeTime);

export const dateConverter = (date: string) => {
  const recieved = dayjs(date).format('YYYY-MM-DD');
  const today = dayjs(new Date()).format('YYYY-MM-DD');

  return recieved === today
    ? dayjs(date).format('A h:mm')
    : dayjs(date).fromNow();
};
