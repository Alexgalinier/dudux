import React from 'react';

export default ({ text, completed, onClick }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={onClick}
  >
    {text}
  </li>
);
