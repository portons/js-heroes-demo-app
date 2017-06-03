import React from 'react';
import { AppRegistry } from 'react-native';

import JsHeroesMobile from 'native-components/js-heroes';

const App = () => (
	<JsHeroesMobile />
);

AppRegistry.registerComponent(
	'js-heroes-hybrid-app',
	() => App
);
