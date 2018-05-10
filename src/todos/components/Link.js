import React from 'react';

export default ({ active, onClick, children }) => (
  <a
    style={active ? { color: 'blue', marginRight: 10 } : { marginRight: 10 }}
    onClick={onClick}
  >
    {children}
  </a>
);
