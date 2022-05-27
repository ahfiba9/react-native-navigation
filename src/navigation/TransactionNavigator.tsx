import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionScreen } from '../scenes/transactionScreen/TransactionScreen';

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
