import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todosApp } from './todos.reducer';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

const store = createStore(todosApp);

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
