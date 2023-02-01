import React from 'react'
import "./ToDoListTemplate.css"
function ToDoListTemplate({text, todo, setTodo, todos, editForm, setEditForm, setId, setinputtxt, inputtxt}) {
const handleDelete = () => {
  setTodo(todo.filter((el) => el.id !== todos.id));
  console.log(todos)
}
const handleEdit = (todos, index) => {
  setEditForm(true);
  setId(index);
  setinputtxt(todos.inputtxt)

}
  return (
    <>
      {/* {editForm===false && 
        ( */}
          <div className='body'>
            <li>{text}</li>
            <button onClick={handleDelete}>delete</button>
            <button onClick={handleEdit}>update</button>
          </div>
        {/* )
      } */}
    </>
    
        
  )
}

export default ToDoListTemplate;