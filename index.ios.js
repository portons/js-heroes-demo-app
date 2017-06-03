import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from 'core/store/store';

import JsHeroesMobile from 'native-components/js-heroes';

const App = () => (
	<Provider store={ store }>
		<JsHeroesMobile />
	</Provider>
);

AppRegistry.registerComponent(
	'js-heroes-hybrid-app',
	() => App
);
