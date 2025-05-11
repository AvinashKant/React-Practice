import { useEffect, useRef, useState } from "react";
import MouseMove from "../components/MouseMove";

export default function MouseMoment() {
  const options = {
    o: [],
    A: [
      { id: 1, name: "Alice", age: 30 },
      { id: 2, name: "Bob", age: 25 },
      { id: 3, name: "Charlie", age: 35 },
    ],
  };

  const [xPosition, setXPosition] = useState(0);
  const [YPosition, setYPosition] = useState(0);

  const [select1, setSelect1] = useState("o");
  const [select2, setSelect2] = useState(0);

  console.log(options[select1]);
  console.log(select1);

  const select1Ref = useRef(null);
  const select2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const id = setTimeout(() => {
        setXPosition(event.clientX);
        setYPosition(event.clientY);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(id);
    };
  }, []);

  function selectBox2(event) {
    console.log(event.target.value);
    setSelect1(event.target.value);
    setSelect2(event.target.value);
  }

  return (
    <>
      <h1>Add mouse pointer</h1>
      <MouseMove xPosition={xPosition} YPosition={YPosition} />

      <div className="bg-yellow-50">
        <select name="" id="" ref={select1Ref} onChange={selectBox2}>
          <option value="0">Select option</option>
          <option value="A">Test1</option>
          <option value="2">Test2</option>
          <option value="3">Test2</option>
          <option value="4">Test3</option>
        </select>
      </div>
      <div className="bg-gray-50 mt-1">
        <select name="" id="" ref={select2Ref}>
          <option value="">Please select option from select 1</option>
          {options[select1].map((person) => (
            <option key={person.id} value={person.id}>
              {person.name} ({person.age})
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
