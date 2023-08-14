import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewScreen from '../screens/ViewScreen/ViewScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer testID="tab-navigator"> 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Buscar') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Ordenar') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Vista') {
              iconName = focused ? 'eye' : 'eye-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Ordenar" component={OrderScreen} />
        <Tab.Screen name="Buscar" component={SearchScreen} />
        <Tab.Screen name="Vista" component={ViewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;