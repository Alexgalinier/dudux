import deepFreeze from 'deep-freeze';
import visibilityFilterReducer from './visibilityFilter';

it('should set a filter', () => {
  const stateBefore = 'SHOW_ALL';
  const action = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED' };
  const stateAfter = 'SHOW_COMPLETED';

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(visibilityFilterReducer(stateBefore, action)).toEqual(stateAfter);
});
