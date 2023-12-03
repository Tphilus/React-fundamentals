import "./App.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

const BookList = () => {
  return <section className="booklist"> </section>;
};

cont names = []

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
