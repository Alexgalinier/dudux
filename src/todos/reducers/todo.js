import match from 'match';

export default (state = {}, action) =>
  match(action.type, {
    ADD_TODO: () => ({
      id: action.id,
      text: action.text,
      completed: false
    }),
    TOGGLE_TODO: () =>
      state.id === action.id
        ? Object.assign({}, state, { completed: !state.completed })
        : state,
    _: () => state
  });
