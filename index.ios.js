import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from 'core/store/store';

import App from 'native-components/app';

const JsHeroes = () => (
	<Provider store={ store }>
		<App/>
	</Provider>

);

AppRegistry.registerComponent('js-heroes-hybrid-app', () => JsHeroes);
