import './ToDoListTemplate.css';

function ToDoListTemplate() {
  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="enter">
        <h5>Part to entrer </h5>
        <input type="text" />
      </div>
      <div className="list">
      <h5>ToDo List Part</h5>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Jus</li>
      </ul>
      </div>
    </div>
  );
}

export default ToDoListTemplate;
