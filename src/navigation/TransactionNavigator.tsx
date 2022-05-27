import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionScreen } from '../scenes/transaction/TransactionScreen';

const Stack = createStackNavigator();

export const TransactionsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Home"
      component={TransactionScreen}
      options={({ route }) => ({ title: route.name })}
    />
  </Stack.Navigator>
);
