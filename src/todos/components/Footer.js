import React from 'react';
import { FilterLink } from 'todos/containers';

export default props => (
  <div>
    <FilterLink {...props} filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink {...props} filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink {...props} filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </div>
);
