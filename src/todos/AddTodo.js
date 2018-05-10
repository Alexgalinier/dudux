import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'todos/todos.action';

let AddTodo = ({ onAddTodo }) => {
  let input;

  const newTodoInputChange = e => {
    const key = e.which || e.keyCode;
    if (key === 13 && e.target.value !== '') {
      onAddTodo(e.target.value);
      input.value = '';
    }
  };

  return (
    <div>
      <input
        ref={_ => (input = _)}
        type="text"
        onKeyPress={newTodoInputChange}
      />
    </div>
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    onAddTodo: text => dispatch(addTodo(text))
  })
)(AddTodo);
