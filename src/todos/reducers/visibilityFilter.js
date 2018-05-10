import match from 'match';

export default (state = 'SHOW_ALL', action) =>
  match(action.type, {
    SET_VISIBILITY_FILTER: () => action.filter,
    _: () => state
  });
