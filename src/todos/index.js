import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducers from './reducers';
import { AddTodo, VisibleTodoList } from './containers';
import { Footer } from './components';

const store = createStore(todosReducers);

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Todos</h1>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}
