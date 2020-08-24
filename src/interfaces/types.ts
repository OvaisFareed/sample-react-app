export interface CommentType {
  author: Author;
  text: string;
  date: string;
}

export interface Author {
  name: string;
  avatarUrl: string;
}
