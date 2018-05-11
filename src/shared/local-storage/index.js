import throttle from 'lodash/throttle';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = throttle(state => {
  localStorage.setItem('state', JSON.stringify(state));
}, 1000);
