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
