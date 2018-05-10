import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from 'todos/todos.action';

class FilterLink extends Component {
  render() {
    const { visibilityFilter, filter, onClick, children } = this.props;

    return (
      <Link active={visibilityFilter === filter} onClick={onClick(filter)}>
        {children}
      </Link>
    );
  }
}

export default connect(
  state => ({ visibilityFilter: state.visibilityFilter }),
  dispatch => ({
    onClick: filter => () => dispatch(setVisibilityFilter(filter))
  })
)(FilterLink);
