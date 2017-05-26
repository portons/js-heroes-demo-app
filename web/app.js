import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'core/store/store';

import JsHeroes from 'web/components/js-heroes';

if ($_ENVIRONMENT === 'development') {
	const Mimic = require('mimic').default;

	window.mimic = Mimic;

	const mocks = require.context('core/mocks', true, /\.json$/);

	mocks.keys().forEach((key) => Mimic.import(JSON.stringify(mocks(key))));
}

render(
  <Provider store={ store }>
    <JsHeroes />
  </Provider>,
  document.getElementById('app')
);
