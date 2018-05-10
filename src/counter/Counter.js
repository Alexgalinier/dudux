import React from 'react';

export default ({ val, onIncrement, onDecrement }) => (
  <div>
    <h1>{val}</h1>
    <button onClick={onIncrement}>INCREASE</button>
    <button onClick={onDecrement}>DECREASE</button>
  </div>
);
