import { createStore } from 'redux';
import { loadState, saveState } from 'local-storage';
import todosReducers from './reducers';

const savedState = loadState();
export const store = createStore(todosReducers, savedState);
store.subscribe(() => {
  saveState(store.getState());
});
