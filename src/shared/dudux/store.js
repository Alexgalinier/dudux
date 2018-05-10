export const createStore = reducers => new Store(reducers);

const updateState = (state, reducers, action = {}) => {
  let newState = { ...state };
  for (let i = 0; i < reducers.length; i++) {
    newState = reducers[i](state, action);
  }
  return newState;
};

class Store {
  constructor(reducers) {
    this.reducers = reducers.isArray ? reducers : [reducers];
    this.subscribers = [];
    this.state = updateState(this.state, this.reducers);
  }

  getState = () => this.state;
  dispatch = action => {
    const prevState = this.state;
    this.state = updateState(prevState, this.reducers, action);
    this.subscribers.map(_ => _(prevState, this.state, action));
  };
  subscribe = subscriber => this.subscribers.push(subscriber);
}
