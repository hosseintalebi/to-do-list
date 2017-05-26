import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer'
import TodoInputReducer from './TodoInputReducer'

export default combineReducers({
  todoList: TodoListReducer,
  inputText: TodoInputReducer
})
