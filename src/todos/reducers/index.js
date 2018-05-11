import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({ visibilityFilter, todos });
export const getVisibleTodos = state =>
  fromTodos.getVisibleTodos(state.todos, state.visibilityFilter);
