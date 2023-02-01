import React from 'react';
import './App.css';
import ToDoListTemplate from './ToDoListTemplate';
function App() {
  const [inputtxt, setInputtxt] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const [editForm, setEditForm] = React.useState(false);
  const [id, setId] = React.useState();
  const handelTextInput = (e) =>{
    console.log(e.target.value)
    setInputtxt(e.target.value);
  }
const submitFormHandler = (e) => {
  e.preventDefault();
  if(!inputtxt) return;
  setTodo([
    ...todo, {text: inputtxt, id: Math.random() * 99}
  ])
  setInputtxt("");
};
const editFormHandler = (e) => {
  e.preventDefault();
  let items = [...todo];
  let item = items[id];
  item.inputtxt = inputtxt;
  items[id] = item;
  setTodo(items);
  setInputtxt('');
  setEditForm(false);
}

  return (
    <>
      {editForm===false&&(
      <div className="App">
      <h1>ToDoList</h1>
      <form onSubmit={submitFormHandler} className="enter">
        <h5>Part to entrer </h5>
        <input value={inputtxt} onChange={handelTextInput} type="text" />
      </form>
      <h5>ToDo List Part</h5>
      {todo.length>0 && (
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
    )}
    </div>
    )}
    
    
    {editForm===true&&(
      <div className="App">
        <h1>ToDoList</h1>
        <form onSubmit={editFormHandler} className="enter">
          <h5>Part to entrer </h5>
          <input value={inputtxt} onChange={handelTextInput} type="text" />
        </form>
        {todo.length>0 && (
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
    )}
      </div>
    )}
    
    
    </>
    
  );
}

export default App;
