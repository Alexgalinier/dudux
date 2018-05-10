import React, { Component } from 'react';
import { counter } from './counter/counter.reducer';
import { createStore } from 'dudux';
import Counter from './counter/Counter';

const store = createStore(counter);

class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => this.forceUpdate());
  }

  buttonClick = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  render() {
    return (
      <div className="App">
        <Counter
          val={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    );
  }
}

export default App;
