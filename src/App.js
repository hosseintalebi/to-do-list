import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducers from './data/reducers'

import TodoList from './components/TodoList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(logger))}>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App;
