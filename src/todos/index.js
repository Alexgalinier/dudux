import React from 'react';
import Root from './containers/Root';
import { store } from './configureStore';
/* import { fetchTodos } from 'api'; */

/* fetchTodos().then(_ => console.log(_)); */

export default () => <Root store={store} />;
