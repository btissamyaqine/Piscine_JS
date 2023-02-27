import React from 'react'
import './item.css'

function items({text}) {

  return (
    <div className="todo">
      <li className='todo_list'>{text}</li>
    </div>
  )
}

export default items