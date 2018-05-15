import { createStore } from 'redux';
import { loadState, saveState } from 'local-storage';
import { logPrevious, logAction, logNext } from 'logger';
import todosReducers from './reducers';

const savedState = loadState();
const addLoggingToDispatch = dispatch => {
  const rawDispatch = dispatch;

  return action => {
    console.group(action.type);
    logPrevious(store.getState());
    logAction(action);
    const rawValue = rawDispatch(action);
    logNext(store.getState());
    console.groupEnd(action.type);
    return rawValue;
  };
};

const addPromiseToDispatch = dispatch => {
  const rawDispatch = dispatch;

  return action => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }

    return rawDispatch(action);
  };
};

export const store = createStore(todosReducers, savedState);

store.dispatch = addLoggingToDispatch(store.dispatch);
store.dispatch = addPromiseToDispatch(store.dispatch);

store.subscribe(() => {
  saveState(store.getState());
});
