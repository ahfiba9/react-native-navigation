import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { HomeScreen } from '../scenes/homeScreen/HomeScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Home Screen"
      component={HomeScreen}
      options={({ route }) => ({ title: route.name })}
    />
  </Stack.Navigator>
);
