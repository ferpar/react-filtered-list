export {};

declare global {
  type Book = {
    title: string;
    author: string;
    year: number;
    genre: string;
    pages: number;
    language: string;
    ISBN: string;
  };

  interface BookListProps {
    books: Book[];
  }
}
