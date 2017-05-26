import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer'
import TodoInputReducer from './TodoInputReducer'
import FilterReducer from './FilterReducer'

export default combineReducers({
  todoList: TodoListReducer,
  inputText: TodoInputReducer,
  filter: FilterReducer,
})
