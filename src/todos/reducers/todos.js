import { combineReducers } from 'redux';
import match from 'match';
import todo from './todo';

const byIds = (state = {}, action) =>
  match(action.type, {
    ADD_TODO: () => ({ ...state, [action.id]: todo(state[action.id], action) }),
    TOGGLE_TODO: () => ({
      ...state,
      [action.id]: todo(state[action.id], action)
    }),
    RECEIVE_TODOS: () => {
      return action.todos.reduce((list, _) => {
        list[_.id] = _;
        return list;
      }, {});
    },
    _: () => state
  });

const allIds = (state = [], action) =>
  match(action.type, {
    ADD_TODO: () => [...state, action.id],
    RECEIVE_TODOS: () => {
      return action.todos.map(_ => _.id);
    },
    _: () => state
  });

const todos = combineReducers({ byIds, allIds });

export default todos;

const getAllTodos = state => state.allIds.map(_ => state.byIds[_]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);

  return match(filter, {
    SHOW_ACTIVE: () => allTodos.filter(_ => !_.completed),
    SHOW_COMPLETED: () => allTodos.filter(_ => _.completed),
    _: () => allTodos
  });
};
