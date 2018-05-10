import React, { Component } from 'react';
import match from 'match';
import TodoList from './TodoList';
import { connect } from 'react-redux';

class VisibleTodoList extends Component {
  render() {
    const { visibilityFilter, todos, onToggleTodo } = this.props;

    const visibleTodos = match(visibilityFilter, {
      SHOW_ACTIVE: () => todos.filter(_ => !_.completed),
      SHOW_COMPLETED: () => todos.filter(_ => _.completed),
      _: () => todos
    });

    return <TodoList todos={visibleTodos} onTodoClicked={onToggleTodo} />;
  }
}

export default connect(
  state => ({
    visibilityFilter: state.visibilityFilter,
    todos: state.todos
  }),
  dispatch => ({
    onToggleTodo: id => () => dispatch({ type: 'TOGGLE_TODO', id })
  })
)(VisibleTodoList);
