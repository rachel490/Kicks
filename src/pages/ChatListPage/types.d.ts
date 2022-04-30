export interface IUser {
  name: string;
  profile_image_url: string;
}

export interface IChat {
  id: number;
  with_user: IUser;
  chats: string[];
}
