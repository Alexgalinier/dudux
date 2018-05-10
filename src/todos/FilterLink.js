import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';

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
    onClick: filter => () => dispatch({ type: 'SET_VISIBILITY_FILTER', filter })
  })
)(FilterLink);
