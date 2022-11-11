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
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
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
  result: ResultUser;
  token: string;
}
export interface DataResultUser {
  user: IUser;
}
