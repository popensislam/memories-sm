
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
  creator: string,
  title: string,
  message: string,
  tags: string,
  selectedFile: string
}

