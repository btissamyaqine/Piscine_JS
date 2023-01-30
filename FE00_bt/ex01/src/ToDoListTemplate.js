import React from 'react'
import "./ToDoListTemplate.css"
function ToDoListTemplate({text}) {
  return (
    <div className='body'>
        <li>{text}</li>
        <button>delete</button>
        <button>update</button>
    </div>
  )
}

export default ToDoListTemplate