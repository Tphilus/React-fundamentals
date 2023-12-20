import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Form from "./Form";
import Person from "./Person";
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
  };

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerStateChallenge;
