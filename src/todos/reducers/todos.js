import uuidv4 from 'uuid/v4';
import match from 'match';

const todo = (state = {}, action) =>
  match(action.type, {
    ADD_TODO: () => ({
      id: action.id !== undefined ? action.id : uuidv4(),
      text: action.text,
      completed: false
    }),
    TOGGLE_TODO: () =>
      state.id === action.id
        ? Object.assign({}, state, { completed: !state.completed })
        : state,
    _: () => state
  });

export default (state = [], action) =>
  match(action.type, {
    ADD_TODO: () => [...state, todo(undefined, action)],
    TOGGLE_TODO: () => state.map(_ => todo(_, action)),
    _: () => state
  });
