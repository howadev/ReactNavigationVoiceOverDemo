/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './First';
import Second from './Second';
import Third from './Third';

const App = createAppContainer(
  createStackNavigator({
    First,
    Second,
    Third,
  }),
);

export default App;
