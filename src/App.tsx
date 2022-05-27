import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, StyleSheet } from 'react-native';

import { AppNavigator } from './navigation/AppNavigator';
import { navigationRef } from './navigation/rootNavigation';
import axios from 'axios';

interface TransactionsRawData {
  transactions: TransactionsRawDataDetails[];
}

export interface TransactionsRawDataDetails {
  id: string;
  notification_read: boolean;
}

interface AppContextInterface {
  transactions: TransactionsRawData | null;
  setTransactions: React.Dispatch<
    React.SetStateAction<TransactionsRawData | null>
  >;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);

export default function App() {
  const [transactions, setTransactions] = useState<TransactionsRawData | null>(
    null,
  );

  const geTransactionsData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/transactions');
      console.log('data = ', data)
      setTransactions(data);
    } catch (e) {
      Alert.alert('Error', 'Something went wrong..', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  useEffect(() => {
    geTransactionsData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
      }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
