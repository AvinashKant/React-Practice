import { useState } from "react";
import "./chip.css";

export default function ChipsInput() {
  const [chips, setChips] = useState([]);

  async function submitText(event) {
    if (event.key === "Enter") {
      if (event.target.value.length > 1) {
        await setChips((prev) => {
          return [...prev, event.target.value];
        });

        event.target.value = null;
      } else {
        alert("enter text");
      }
    }
  }

  function removeChip(index) {
    console.log(index);
  }

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        style={{ "background-color": "lightyellow" }}
        onKeyUp={submitText}
      />

      <div className="chipBody">
        {chips.map((ele, index) => {
          return (
            <>
              <div key={index}>
                <div className="chipContent">{ele}</div>
                <div>
                  <button onClick={() => removeChip(index)}>X</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
