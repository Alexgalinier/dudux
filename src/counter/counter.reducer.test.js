import { counter } from './counter.reducer';

it('should change state based on action', () => {
  expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
  expect(counter(1, { type: 'INCREMENT' })).toEqual(2);
  expect(counter(2, { type: 'DECREMENT' })).toEqual(1);
  expect(counter(1, { type: 'DECREMENT' })).toEqual(0);
  expect(counter(1, { type: 'SOMETHING_ELSE' })).toEqual(1);
  expect(counter(undefined, {})).toEqual(0);
});
