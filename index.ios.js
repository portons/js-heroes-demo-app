import React from 'react';
import { AppRegistry } from 'react-native';

//import connect from 'mimic/react-native';
//connect();

import App from 'native-components/app';

const JsHeroes = () => (
  <App/>
);

AppRegistry.registerComponent('js-heroes-hybrid-app', () => JsHeroes);
