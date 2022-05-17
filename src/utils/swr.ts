import axios from 'axios';

export const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const fetcherWithToken = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    })
    .then(result => result.data);
