import deepFreeze from 'deep-freeze';
import todosReducer from './todos';

it('should add a todo', () => {
  const stateBefore = [];
  const action = { type: 'ADD_TODO', id: 0, text: 'Dudux' };
  const stateAfter = [{ id: 0, text: 'Dudux', completed: false }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});

it('should toggle a todo', () => {
  const stateBefore = [
    { id: 0, text: 'Dudux', completed: false },
    { id: 1, text: 'Lulux', completed: false }
  ];
  const action = { type: 'TOGGLE_TODO', id: 0 };
  const stateAfter = [
    { id: 0, text: 'Dudux', completed: true },
    { id: 1, text: 'Lulux', completed: false }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});
