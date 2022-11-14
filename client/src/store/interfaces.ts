export interface Posts {
  _id: string;
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likeCount: number;
  createdAt: string;
  __v: number;
}

export interface Post {
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
}

export interface IUser {
  id: string,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  mainImage: string,
  friends: [{ id: String, username: String, image: String }],
  subscribers: [{ id: String, username: String, image: String }],
  images: [string],
  videos: [string],
  musics: [string],
  articles: [],
  status: string,
  interestedIn: string,
  phone: string,
  country: string,
  city: string,
  website: string,
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
