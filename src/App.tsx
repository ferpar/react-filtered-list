import BookList from './BookList'
import booksObj from './data/books.json'
import './App.css'



function App() {
  const untypedBooks = booksObj.books as unknown
  const allBooks = untypedBooks as Book[]

  return (
    <>
    <BookList books={allBooks} />
    </>
  )
}

export default App
