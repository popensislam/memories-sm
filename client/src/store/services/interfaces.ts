
export interface Posts {
  __v: number;
  _id: string;
  createdAt: Date;
  likeCount: number;
  tags: any[];
}

export interface Post {
  creator: string,
  title: string,
  message: string,
  tags: string,
  selectedFile: string
}