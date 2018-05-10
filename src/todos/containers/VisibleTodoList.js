import React, { Component } from 'react';
import { connect } from 'react-redux';
import match from 'match';
import { TodoList } from 'todos/components';
import { toggleTodo } from 'todos/actions';

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
    onToggleTodo: id => () => dispatch(toggleTodo(id))
  })
)(VisibleTodoList);
