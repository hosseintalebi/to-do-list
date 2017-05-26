import React from 'react'

import './styles/TodoItem.css'

export default function ({todo, toggleDone, removeTodo}) {
  return (
    <div className='todo-item'>
      <input type='checkbox' checked={todo.done} onClick={() => toggleDone(todo.id, !todo.done)}/>
      <div className={'todo-text' + (todo.done ? ' todo-text-done' : '')}>{todo.text}</div>
      <div className='remove-todo' onClick={() => removeTodo(todo.id)}>X</div>
    </div>
  )
}
