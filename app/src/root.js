import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './containers/Home';

ReactDom.render(
  <Provider store={store} >
    <Home />
  </Provider>
  , document.getElementById('app'));
