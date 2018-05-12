export const logPrevious = state =>
  console.log('%c PREVIOUS', 'color:gray', state);

export const logAction = action =>
  console.log('%c ACTION', 'color:red', action);

export const logNext = state => console.log('%c NEXT', 'color:green', state);
