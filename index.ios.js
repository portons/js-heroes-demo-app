import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import store from 'core/store/store';

import JsHeroes from 'native-components/js-heroes';

const App = () => (
	<Provider store={ store }>
		<JsHeroes/>
	</Provider>
);

AppRegistry.registerComponent(
	'js-heroes-hybrid-app',
	() => App
);
