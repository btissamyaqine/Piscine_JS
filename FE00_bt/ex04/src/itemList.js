import React from 'react';
import Item from "./items"
const itemList = ({todos, setTodos}) => {
    console.log(todos);
    
    return (
    <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo, id) =>(
              <Item 
                setTodos={setTodos} 
                todo={todo} 
                todos={todos} 
                text={todo.text}
                id={id} 
                key={todo.id}
                
              />
          ))}
        </ul>
    </div>
    
    );
    
};
export default itemList;