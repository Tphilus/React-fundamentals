import "./App.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h4> {author} </h4>
    </article>
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
