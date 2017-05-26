import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import {
  inputTextChanged,
  addTodo,
  toggleDone,
  removeTodo,
  changeFilter,
} from '../data/actions'

import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import Title from './Title'

import { ALL, COMPLETED, ACTIVE } from '../data/constants'

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
    const { todoList, toggleDone, removeTodo, filter } = this.props
    const filteredList = _.filter(todoList, (todo) => {
      switch (filter) {
        case ACTIVE:
          return !todo.done
        case COMPLETED:
          return todo.done
        default:
          return true
      }
    })
    return filteredList.sort((a, b) => a.id < b.id).map((todo) => (
      <TodoItem todo={todo} key={todo.id} toggleDone={toggleDone} removeTodo={removeTodo} />
    ))
  }

  addTodo () {
    const { addTodo, inputText, inputTextChanged } = this.props
    const { next_todo_id } = this.state
    if (!!inputText && !!inputText.trim()) {
      addTodo({text: inputText.trim(), id: next_todo_id})
      inputTextChanged('')
      this.setState({next_todo_id: next_todo_id + 1})
    }
  }

  renderFooter () {
    const { todoList, changeFilter, filter } = this.props
    if (_.size(todoList)) {
      return (
        <div className='footer'>
          <div
            className={'filter-botton' + (filter === ALL ? ' filter-botton-active' : '')}
            onClick={() => changeFilter(ALL)}>
            All
          </div>
          <div
            className={'filter-botton' + (filter === COMPLETED ? ' filter-botton-active' : '')}
            onClick={() => changeFilter(COMPLETED)}>
            Completed
          </div>
          <div className={'filter-botton' + (filter === ACTIVE ? ' filter-botton-active' : '')}
            onClick={() => changeFilter(ACTIVE)}>
            Active
          </div>
        </div>
      )
    }
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
        {this.renderFooter()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    inputText: state.inputText,
    todoList: state.todoList,
    filter: state.filter,
  }
}

const dispachToProps = {
  inputTextChanged,
  addTodo,
  toggleDone,
  removeTodo,
  changeFilter,
}

export default connect(mapStateToProps, dispachToProps)(TodoList)
