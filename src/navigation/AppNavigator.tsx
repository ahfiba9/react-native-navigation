import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeNavigator } from './HomeNavigator';
import { BuyNavigator } from './BuyNavigator';
import { TransactionsNavigator } from './TransactionNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { ScanNavigator } from './ScanNavigator';
import { ScanButton } from './ScanButton';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionDetailsScreen } from '../scenes/transaction/TransactionDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 10 },
      }}>
      <Tab.Screen
        name="home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="buy"
        component={BuyNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="storefront" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="scan"
        component={ScanNavigator}
        options={{
          headerShown: false,
          tabBarButton: () => (
            <ScanButton onPress={() => console.log('scan')} />
          ),
        }}
      />

      <Tab.Screen
        name="transactions"
        component={TransactionsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
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

// scenes
const StackRoutes = {
  Home: Tabs,
  TransactionDetailsScreen,
  // ProfileScreen,
  // BuyScreen,
  // TransactionScreen,
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {Object.entries(StackRoutes).map(value => {
        const [name, Screen] = value;
        return (
          <Stack.Screen
            name={name as any}
            key={name}
            component={Screen as any}
            options={{
              headerShown: name !== 'Home',
              headerTitle: () => null,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};
