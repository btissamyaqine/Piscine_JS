import React from 'react';
import "./item.css"
const Item = ({text, todo, todos, setTodos}) => {
   const deleteTodoHandeler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todo)
   };
  
    return(
        <div className="todo">
            <li className='todo_list'>{text}</li>
            <button className='todo_btn' onClick={deleteTodoHandeler}>❌</button>
        </div>
    );
}
export default Item;