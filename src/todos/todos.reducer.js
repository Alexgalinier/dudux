import uuidv4 from 'uuid/v4';
import match from 'match';
import { combineReducers } from 'redux';

const todo = (state = {}, action) =>
  match(action.type, {
    ADD_TODO: () => ({
      id: action.id ? action.id : uuidv4(),
      text: action.text,
      completed: false
    }),
    TOGGLE_TODO: () =>
      state.id === action.id
        ? Object.assign({}, state, { completed: !state.completed })
        : state,
    _: () => state
  });

const visibilityFilter = (state = 'SHOW_ALL', action) =>
  match(action.type, {
    SET_VISIBILITY_FILTER: () => action.filter,
    _: () => state
  });

const todos = (state = [], action) =>
  match(action.type, {
    ADD_TODO: () => [...state, todo(undefined, action)],
    TOGGLE_TODO: () => state.map(_ => todo(_, action)),
    _: () => state
  });

export const todosApp = combineReducers({ visibilityFilter, todos });
