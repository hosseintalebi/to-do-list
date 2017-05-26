import React, { Component } from 'react'

import './styles/TodoInput.css'

export default class TodoInput extends Component {
  constructor () {
    super()
    this.onChangeInputText = this.onChangeInputText.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  render () {
    const { inputText } = this.props
    return (
      <input
        type='text'
        placeholder="What do you want to be done?"
        value={inputText}
        onChange={this.onChangeInputText}
        onKeyPress={this.handleKeyPress}
      />
    )
  }

  onChangeInputText ({target}) {
    this.props.inputTextChanged(target.value)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.addTodo(this.props.inputText)
    }
  }
}
