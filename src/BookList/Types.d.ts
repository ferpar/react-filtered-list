export type Book = {
  title: string;
  author: string;
  year: number;
  genre: string;
  pages: number;
  language: string;
  ISBN: string;
};

export interface BookListProps {
  books: Book[];
}
