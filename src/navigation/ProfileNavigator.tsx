import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { ProfileScreen } from '../scenes/profileScreen/ProfileScreen';

const Stack = createStackNavigator();

export const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="My Profile"
      component={ProfileScreen}
      options={({ route }) => ({ title: route.name })}
    />
  </Stack.Navigator>
);
