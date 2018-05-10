import match from 'match';

export const counter = (state = 0, action) =>
  match(action.type, {
    INCREMENT: () => state + 1,
    DECREMENT: () => state - 1,
    _: () => state,
  });
