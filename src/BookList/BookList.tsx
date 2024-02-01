import React from "react";
import styles from "./BookList.module.css";
import { BookListProps } from "./Types";

const BookList = ({ books }: BookListProps) => {
  const languages = books.reduce((ac: string[], book) => {
    if (!ac.includes(book.language)) {
      ac.push(book.language);
    }
    return ac;
  }, []);

  const [formState, setFormState] = React.useState({
    title: "",
    author: "",
    year: 2024,
    genre: "",
    pages: 1000,
    language: languages[0],
  });

  const [filteredBooks, setFilteredBooks] = React.useState(books);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    const newFilteredBooks = books.filter(book => {
      return(
        book.title.toLowerCase().includes(formState.title.toLowerCase()) &&
        book.author.toLowerCase().includes(formState.author.toLowerCase()) &&
        book.year <= formState.year &&
        book.genre.toLowerCase().includes(formState.genre.toLowerCase()) && 
        book.pages <= formState.pages && 
        book.language === formState.language
      )
    })

    setFilteredBooks(newFilteredBooks)
  }, [
    books,
    formState.author,
    formState.genre,
    formState.language,
    formState.pages,
    formState.title,
    formState.year,
  ]);

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Search for a book</h2>
        <form className={styles.bookForm}>
          <label htmlFor="title-input">
            Title:{" "}
            <input
              onChange={handleChangeForm}
              value={formState.title}
              type="text"
              id="title-input"
              name="title"
            ></input>
          </label>
          <label htmlFor="author-input">
            Author:{" "}
            <input
              onChange={handleChangeForm}
              value={formState.author}
              type="text"
              id="author-input"
              name="author"
            ></input>
          </label>
          <label htmlFor="year-input">
            Before Year:{" "}
            <input
              onChange={handleChangeForm}
              value={formState.year}
              type="number"
              id="year-input"
              name="year"
            ></input>
          </label>
          <label htmlFor="genre-input">
            Genre:{" "}
            <input
              onChange={handleChangeForm}
              value={formState.genre}
              type="text"
              id="genre-input"
              name="genre"
            ></input>
          </label>
          <label htmlFor="pages-input">
            Max. Pages:{" "}
            <input
              onChange={handleChangeForm}
              value={formState.pages}
              type="number"
              id="pages-input"
              name="pages"
            ></input>
          </label>
          <label htmlFor="language-input">
            Language{": "}
            <select
              onChange={handleChangeForm}
              value={formState.language}
              id="language-input"
              name="language"
            >
              {languages.map((language) => {
                return (
                  <option key={language} value={language}>
                    {language}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>
      <h2>Results</h2>
      <div className={styles.bookGrid}>
        {filteredBooks.map((book) => {
          return (
            <div key={book.ISBN} className={styles.book}>
              <h2>{book.title}</h2>
              <h3>
                {book.author}, {book.year}
              </h3>
              <p>
                {book.genre}, {book.pages} pages
              </p>
              <p>{book.language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
