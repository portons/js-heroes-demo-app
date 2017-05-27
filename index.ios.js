import React from 'react';
import { AppRegistry } from 'react-native';
//import { Provider } from 'react-redux';

import App from 'native-components/app';

const JsHeroes = () => (
	<App/>
);

AppRegistry.registerComponent('js-heroes-hybrid-app', () => JsHeroes);
