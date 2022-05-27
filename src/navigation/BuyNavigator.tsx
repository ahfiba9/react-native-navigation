import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { BuyScreen } from '../scenes/buyScreen/BuyScreen';

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
