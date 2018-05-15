import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from 'todos/components';
import * as actions from 'todos/actions';
import { getVisibleTodos } from 'todos/reducers';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpate() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchTodos();
  };

  render() {
    const { toggleTodo, ...rest } = this.props;

    return <TodoList {...rest} onTodoClicked={toggleTodo} />;
  }
}

export default connect(
  state => ({
    todos: getVisibleTodos(state)
  }),
  actions
)(VisibleTodoList);
