import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'core/store/store';

import JsHeroes from 'web/components/js-heroes';

render(
  <Provider store={ store }>
    <JsHeroes />
  </Provider>,
  document.getElementById('app')
);
