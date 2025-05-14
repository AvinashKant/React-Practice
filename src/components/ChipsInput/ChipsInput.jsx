import { useState } from "react";
import "./chip.css";

export default function ChipsInput() {
  const [chips, setChips] = useState([]);

  async function submitText(event) {
    if (event.key === "Enter" && event.target.value.trim() !== '') {
        await setChips((prev) => {
          return [
            ...prev,
            {
              id: chips.length + 1,
              text: event.target.value,
            },
          ];
        });

        event.target.value = null;
    }
  }

  function removeChip(index) {
    setChips(chips.filter((e) => e.id !== index));
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="m-t-10 ">
          <h1>Chips</h1>
          <input
            type="text"
            name=""
            id=""
            style={{ "background-color": "lightyellow" }}
            onKeyUp={submitText}
            className="p-2 w-[200px]"
          />
        </div>
        <div className="flex flex-wrap items-center">
          {chips.map((ele, index) => {
            return (
              <>
                <div
                  key={ele.id}
                  className="flex items-center m-1 rounded-2xl bg-yellow-400 p-1"
                >
                  {ele.text}{" "}
                  <button onClick={() => removeChip(ele.id)} className="bg-transparent border-none ml-2 cursor-pointer text-red-800" >X</button>

                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
