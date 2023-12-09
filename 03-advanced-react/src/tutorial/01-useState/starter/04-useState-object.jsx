import { useState } from "react";

const UseStateObject = () => {
  //   const [name, setName] = useState("peter");
  //   const [age, setAge] = useState(24);
  //   const [hobby, setHobby] = useState("real books");
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setName("John");
    // setAge(28);
    // setHobby("scream at the computer");
    // setPerson({
    //   name: "john",
    //   age: 28,
    //   hobby: "scream at the computer",
    // });

    setPerson({ ...person, name: "susan", age: 20 });
  };

  const { name, age, hobby } = person;

  return (
    <>
      <h3> {name} </h3>
      <h3> {age} </h3>
      <h4> Enjoy : {hobby} </h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
