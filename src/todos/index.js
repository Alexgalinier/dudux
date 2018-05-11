import React from 'react';
import Root from './containers/Root';
import { store } from './configureStore';

export default () => <Root store={store} />;
