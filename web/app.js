import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'core/store/store';

import JsHeroesWeb from 'web/components/js-heroes';

render(
  <Provider store={ store }>
    <JsHeroesWeb />
  </Provider>,
  document.getElementById('app')
);
