import './App.css';
import {useState} from 'react'
function App({saveTodo}) {

  const [textInput, setInputText] = useState("");
  const [items, setItems] = useState([])

  const hadleTextInput = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const handleSubmitText = (e) =>{
    e.preventDefault()
    setItems([
      ...items,
      { text: textInput, id: Math.random() * 9}
    ]);
    setInputText("");
  }
  return (
    <div className="App">
      <form onSubmit={(event) => {
        event.preventDefault();
        saveTodo(textInput);
      }}>
        <input onChange={hadleTextInput} value={textInput} className='input_text' type='text' name='text_input'/>
        <button onClick={handleSubmitText}>Add</button>
      </form>
        <ul>
          {items.map(item => {
            return(
              console.log(
                <li>
                  {/* {item.text} */}
                </li>
              ))
          })}
        </ul>
    </div>
    
  );
}

export default App;
// items={items} item={item} setItems={setItems} text={item.text} key={item.id}