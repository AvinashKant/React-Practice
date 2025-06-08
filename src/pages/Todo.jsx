import { useState, useId } from "react";

export default function ToDo() {
  const [todo, setTodo] = useState([]);

  console.log(todo);

  function deleteTodo(index) {
    const newTodo = todo.filter((item) => {
      console.log(item, index);
      return item.id != index;
    });
    setTodo(newTodo);
  }

  async function submitText(event) {
    if (event.key === "Enter") {
      if (event.target.value.length > 1) {
        await setTodo((prev) => {
          return [
            ...prev,
            {
              id: prev.length + 1,
              text: event.target.value,
              isCompleted: false,
            },
          ];
        });
        event.target.value = null;
      } else {
        alert("enter text");
      }
    }
  }

  return (
    <>
      <div className="">
        <div className="px-4 sm:px-6 lg:px-8 bg-[#E5E5E5]">
          <div className="flex">
            <div className="w-[100%]">
              <input
                type="text"
                onKeyUp={submitText}
                placeholder="Enter todo"
                className="border-color-[#6c63ff] p-1"
              />
            </div>
            <div className="w-[80%]">drop</div>
            <div className="w-[20%]">dark theme</div>
          </div>

          <div className="mx-auto justify-center max-h-96 overflow-y-auto">
            {todo.map((todo, index) => {
              return (
                <div
                  className="flex justify-between items-center m-1 p-1"
                  key={index}
                >
                  <div>
                    <input type="checkbox" name="" id="" className="" />
                  </div>
                  <div className="justify-center">{todo.text}</div>
                  <div className="bg-red-600 text-white p-1 rounded-b-sm">
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
