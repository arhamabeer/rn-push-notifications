/**
 * @format
 */

import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';

// Initialize Firebase
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Received background message', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
