import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import {
  inputTextChanged,
  addTodo,
  toggleDone,
  removeTodo,
} from '../data/actions'

import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import Title from './Title'

import './styles/TodoList.css'

class TodoList extends Component {

  constructor () {
    super()
    this.state = {
      next_todo_id: 1,
    }
    this.addTodo = this.addTodo.bind(this)
  }

  renderTodoItems () {
    const { todoList, toggleDone, removeTodo } = this.props
    return _.keys(todoList).sort((a, b) => a < b).map((id) => (
      <TodoItem todo={todoList[id]} key={id} toggleDone={toggleDone} removeTodo={removeTodo} />
    ))
  }

  addTodo () {
    const { addTodo } = this.props
    const { next_todo_id } = this.state
    addTodo({text: this.props.inputText, id: next_todo_id})
    this.setState({next_todo_id: next_todo_id + 1})
  }

  render () {
    const {inputTextChanged, inputText} = this.props
    return (
      <div className='todo-list'>
        <Title>ToDo</Title>
        <div className='input-wrapper'>
          <TodoInput
            inputText={inputText}
            inputTextChanged={inputTextChanged}
            addTodo={this.addTodo}
          />
        </div>
        <div className='todo-item-container'>
          {this.renderTodoItems()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    inputText: state.inputText,
    todoList: state.todoList
  }
}

export default connect(mapStateToProps, {inputTextChanged, addTodo, toggleDone, removeTodo})(TodoList)
