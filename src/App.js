import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './data/reducers'

import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App;
