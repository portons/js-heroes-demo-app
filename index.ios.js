import React from 'react';
import { AppRegistry } from 'react-native';

import JsHeroes from 'native-components/js-heroes';

const App = () => (
	<JsHeroes/>
);

AppRegistry.registerComponent('js-heroes-hybrid-app', () => App);
