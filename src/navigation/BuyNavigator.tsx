import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BuyScreen } from '../scenes/buy/BuyScreen';

const Stack = createStackNavigator();

export const BuyNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Buy Screen"
      component={BuyScreen}
      options={({ route }) => ({ title: route.name })}
    />
  </Stack.Navigator>
);
