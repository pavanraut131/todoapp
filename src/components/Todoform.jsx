import React, { useState } from 'react'
import { useTodo } from '../contexts'

const Todoform = () => {
    const [todo, settodo] = useState('')
    const {addtodo} = useTodo();

    const add = (e)=>{
        e.preventDefault();
        if(!todo) return
        addtodo({todo:todo, completed:false})
        settodo("")
    }
  return (
    <div>
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-[rgb(30,30,30)] py-1.5"
              value={todo}
              onChange={(e) => settodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-violet-600 text-white shrink-0">
              Add
          </button>
      </form>
    </div>
  )
}

export default Todoform
