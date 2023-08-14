/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Asegúrate de que la ruta sea correcta
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
