/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './input.css'

const input = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value);
};
const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, 
        {text: inputText, id: Math.random() * 1000 }
    ]);
    setInputText("");
};
  return (
    <div className='input'>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
          ADD
      </button>
    </div>
    
    
  )
}

export default input;