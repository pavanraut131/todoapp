import React, { useState } from 'react'
import { useTodo } from '../contexts'

const Todoitem = ({todo}) => {
    const [editable, seteditable] = useState(false)
    const [editmsg, seteditmsg]= useState(todo.todo)
    const {deltetodo , updatetodo, toggletodo} = useTodo()

    const edittodo = () => {
        updatetodo(todo.id, {...todo, todo : editmsg})
        seteditable(false);
    }
    const toggleCompleted =()=>{
        toggletodo(todo.id)
    }
  return (
    <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#95b8e2]" : "bg-[#4b3e99]"
          }`}
      >
        {/* Input Form */}
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                editable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={editmsg}
              onChange={(e) => seteditmsg(e.target.value)}
              readOnly={!editable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (editable) {
                    edittodo();
                  } else seteditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {editable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deltetodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default Todoitem;
