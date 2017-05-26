import {
  INPUT_TEXT_CHANGED,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_DONE,
} from '../constants'


export function inputTextChanged (text) {
  return {
    type: INPUT_TEXT_CHANGED,
    payload: text,
  }
}

export function addTodo (todo_text) {
  return {
    type: ADD_TODO,
    payload: todo_text,
  }
}

export function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    payload: {id: id},
  }
}

export function toggleDone (id, value) {
  return {
    type: TOGGLE_DONE,
    payload: {id: id, value: value},
  }
}
