export interface IUser {
  name: string;
  profile_image_url: string;
}

export interface IChatList {
  id: number;
  with_user: IUser;
  last_content: string;
  last_chatted_at: string;
}

export interface IChatRoom {
  id: number;
  with_user: IUser;
  chats: IChat[];
}

export interface IChat {
  sender: string;
  content: string;
  send_at: LocalDateTime;
}

export interface IVideoListItem {
  id: number;
  thumbnail_url: string;
}

export interface IVideoItem {
  id: number;
  video_url: string;
  thumbnail_url: string;
  category: string;
  title: string;
  description: string;
  price: number;
  usedStatus: boolean;
  view_count: number;
  user: {
    id: number;
    name: string;
    profile_image_url: string;
  };
}

export interface IUserAdmin {
  id: number;
  email: string;
  nickname: string;
  data_joined: string;
  last_login: string;
}
