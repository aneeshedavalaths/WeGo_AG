/**
 * @format
 */

import {AppRegistry} from 'react-native';
export const RewardScreen =({navigation}) => <Home navigation={navigation} name="Reward" />
import {createDrawerNavigator} from 'react-navigation';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import Main from './Main';
import {name as appName} from './app.json';
import Home from './screens/Home';

AppRegistry.registerComponent(appName, () => Main);
