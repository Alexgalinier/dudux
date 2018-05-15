import uuidv4 from 'uuid/v4';
import * as api from 'api';

export const addTodo = text => ({ id: uuidv4(), type: 'ADD_TODO', text });
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
export const toggleTodo = id => ({ type: 'TOGGLE_TODO', id });
export const receiveTodos = todos => ({ type: 'RECEIVE_TODOS', todos });
export const fetchTodos = () => api.fetchTodos().then(_ => receiveTodos(_));
