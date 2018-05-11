import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from 'todos/components';
import { toggleTodo } from 'todos/actions';
import { getVisibleTodos } from 'todos/reducers';

class VisibleTodoList extends Component {
  render() {
    const { todos, onToggleTodo } = this.props;

    return <TodoList todos={todos} onTodoClicked={onToggleTodo} />;
  }
}

export default connect(
  state => ({
    todos: getVisibleTodos(state)
  }),
  { onToggleTodo: toggleTodo }
)(VisibleTodoList);
