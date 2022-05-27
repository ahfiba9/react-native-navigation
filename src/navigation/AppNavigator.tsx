import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeNavigator } from './HomeNavigator';
import { BuyNavigator } from './BuyNavigator';
import { TransactionsNavigator } from './TransactionNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { HomeScreen } from '../scenes/homeScreen/HomeScreen';
import { ProfileScreen } from '../scenes/profileScreen/ProfileScreen';
import colors from '../styles/colors';
import { ScanNavigator } from './ScanNavigator';
import { ScanButton } from './ScanButton';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 10 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={BuyNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="storefront" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanNavigator}
        options={{
          headerShown: false,
          tabBarButton: () => (
            <ScanButton onPress={() => console.log('scan')} />
          ),
        }}
      />

      <Tab.Screen
        name="Transactions"
        component={TransactionsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
