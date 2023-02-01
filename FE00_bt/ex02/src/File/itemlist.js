import React from 'react';
import Item from "./item"
const itemList = ({todos, setTodos}) => {
    console.log(todos)
    return (
    <div className="todo-container">
        <ul className="todo-list">
        {todos.map(todo =>(
            <Item 
            setTodos={setTodos} 
            todo={todo} 
            todos={todos} 
            text={todo.text} 
            key={todo.id}/>
        ))}
        </ul>
    </div>
    
    );
    
};
export default itemList;