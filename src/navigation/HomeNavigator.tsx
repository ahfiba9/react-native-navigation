import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../scenes/home/HomeScreen';

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
