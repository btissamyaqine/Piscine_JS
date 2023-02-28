import React from 'react'
// import { useState } from "react";
import './item.css'

function Items({ text, id, todos, todo, setTodos }) {
  // const [show, setShow] = useState(false);

  const completeTodo = id => {
    const newTodos = [...todos];
    newTodos[id].completed = true;
    setTodos(newTodos);
};
const handleDelete = (id) => {
  const newTodo = [...todos];
  newTodo.splice(id,1)
  setTodos(newTodo);
}

  return (
    <div className="todo">
      
      <li className='todo_list' onClick={() => completeTodo(id)} style={{ textDecoration: todo.completed ? "line-through" : "" , color: todo.completed ? "#7f7f7f" : ""}} > {text}</li>{/* <span>&#10003;</span> */}
      {/* <input type="checkbox" onClick={() => completeTodo(id)}/>  */}
      <button className='complete_button' id={id} onClick={() =>handleDelete(id)}>&#10006;</button>
    </div>
  )
}

export default Items;