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

    console.log(newTodo);
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
      <div className="h-full">
        <div className="px-4 sm:px-6 lg:px-8 bg-[#E5E5E5]">
          <h1 className="text-center">TODO LIST</h1>
          <div className="w-full m-2">
            <div className="w-[80%] flex justify-between">
              <input
                type="text"
                onKeyUp={submitText}
                placeholder="Enter todo"
                className="p-2 m-2 border-purple-900"
              />
              <div>Dropdowm</div>
              <div>dark part</div>
            </div>

            <div className="mx-auto justify-center max-h-96 overflow-y-auto">
              {todo.map((todo, index) => {
                return (
                  <div
                    className="flex justify-between items-center m-1 p-1"
                    key={index}
                  >
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div className="justify-center">{todo.text}</div>
                    <div className="bg-red-600 text-white p-1 rounded-b-sm">
                      <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
