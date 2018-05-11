import React from 'react';
import { Provider } from 'react-redux';
import { AddTodo, VisibleTodoList } from './';
import { Footer } from 'todos/components';

export default ({ store }) => (
  <Provider store={store}>
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
);
