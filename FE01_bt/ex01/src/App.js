import './App.css';
import {useState} from 'react'
function App() {
  const [inputNumber, setInputNumber] = useState(1);

  return (
    <>
      <p>Count value is: {inputNumber}</p>
      <button onClick={() => setInputNumber(prevCount => prevCount + 1)}>+1</button>
      <button onClick={() => setInputNumber(prevCount => prevCount - 1)}>-1</button>
    </>
    
  );
}

export default App;