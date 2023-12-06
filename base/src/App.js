import "./App.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

function App() {
  return (
    <div className="">
      <BookList />
    </div>
  );
}

export default App;
