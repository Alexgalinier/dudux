import React from 'react';
import Todo from './Todo';

export default ({ todos, onTodoClicked }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={'todo' + todo.id} {...todo} onClick={onTodoClicked(todo.id)} />
    ))}
  </ul>
);
