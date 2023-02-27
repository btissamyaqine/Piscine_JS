/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import Input from './input'
import ItemList from './itemList'

function todolistTemplate() {
  const [inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([])
  return (
    <div>
      <Input  
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos}  
        setInputText={setInputText}
      />
      <ItemList 
        className='list'
        setTodos={setTodos} 
        todos={todos} />
    </div>
  )
}

export default todolistTemplate;