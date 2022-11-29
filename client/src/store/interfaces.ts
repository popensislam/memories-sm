export interface Posts {
  _id: string;
  title: string;
  message: string;
  creatorId: string;
  creatorUsername: string;
  creatorImg: string;
  tags: string[];
  selectedFile: string;
  likes: [string];
  createdAt: string;
  __v: number;
}

export interface Post {
  title: string;
  message: string;
  creatorId: string | undefined;
  creatorUsername: string | undefined;
  creatorImg: string | undefined;
  selectedFile: string;
}

export interface IUser {
  id: string;
  _id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  mainImage: string;
  friends: [{ id: String; username: String; image: String }];
  subscribers: [{ id: String; username: String; image: String }];
  images: [string];
  videos: [string];
  musics: [string];
  articles: [];
  status: string;
  interestedIn: string;
  phone: string;
  country: string;
  city: string;
  website: string;
  __v?: number;
}

export interface ResultUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  __v: number;
}

export interface UserSign {
  result: IUser;
  token: string;
}
export interface DataResultUser {
  user: IUser;
}
