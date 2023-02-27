import React from 'react'
import './item.css'

function items({ text, id, todos, todo, setTodos }) {
  const completeTodo = id => {
    const newTodos = [...todos];
    newTodos[id].completed = true;
    setTodos(newTodos);
};

  return (
    <div className="todo">
      <li className='todo_list' style={{ textDecoration: todo.completed ? "line-through" : "" }}>{text}</li>
      <input type="checkbox" onClick={() => completeTodo(id)}/> 
      {/* <button onClick={() => completeTodo(id)}>Complete</button> */}
    </div>
  )
}

export default items