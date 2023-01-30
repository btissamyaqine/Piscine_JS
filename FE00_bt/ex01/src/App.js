import React from 'react';
import './App.css';
import ToDoListTemplate from './ToDoListTemplate';
function App() {
  const [inputtxt, setInputtxt] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const handelTextInput = (e) =>{
    console.log(e.target.value)
    setInputtxt(e.target.value);
  }
const submitFormHandler = (e) => {
  e.preventDefault()
  setTodo([
    ...todo, {text: inputtxt, id: Math.random}
  ])
  setInputtxt("");
}

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div onSubmit={submitFormHandler} className="enter">
        {/* <h5>Part to entrer </h5> */}
        <input value={inputtxt} onChange={handelTextInput} type="text" />
      </div>
      <h5>ToDo List Part</h5>
      <ul>
      {todo.map(todos => (
      <ToDoListTemplate
      todos={todos}
      todo={todo}
      setTodo={setTodo} 
      text={todos.text}
      key={todos.id}
      />
      ))}
      </ul>
    </div>
  );
}

export default App;
