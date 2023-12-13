import { Person } from "./Person";
import { people } from "../../../data";

export default function List() {
  return (
    <div>
      {people?.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
}
