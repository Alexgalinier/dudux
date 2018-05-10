import deepFreeze from 'deep-freeze';
import { todosApp } from './todos.reducer';

it('should add a todo', () => {
  const stateBefore = { todos: [], visibilityFilter: 'SHOW_ALL' };
  const action = { type: 'ADD_TODO', id: 0, text: 'Dudux' };
  const stateAfter = {
    todos: [{ id: 0, text: 'Dudux', completed: false }],
    visibilityFilter: 'SHOW_ALL'
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todosApp(stateBefore, action)).toEqual(stateAfter);
});

it('should toggle a todo', () => {
  const stateBefore = {
    todos: [
      { id: 0, text: 'Dudux', completed: false },
      { id: 1, text: 'Lulux', completed: false }
    ],
    visibilityFilter: 'SHOW_ALL'
  };
  const action = { type: 'TOGGLE_TODO', id: 0 };
  const stateAfter = {
    todos: [
      { id: 0, text: 'Dudux', completed: true },
      { id: 1, text: 'Lulux', completed: false }
    ],
    visibilityFilter: 'SHOW_ALL'
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todosApp(stateBefore, action)).toEqual(stateAfter);
});

it('should set a filter', () => {
  const stateBefore = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  };
  const action = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' };
  const stateAfter = {
    todos: [],
    visibilityFilter: 'SHOW_COMPLETED'
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todosApp(stateBefore, action)).toEqual(stateAfter);
});
