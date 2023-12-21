import { useState } from "react";
// import { data } from "./data";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3> {people.length} birth today </h3>
        <List />
        <button onClick={() => setPeople([])} className="btn">
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
