import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';

import { AppNavigator } from './navigation/AppNavigator';
import { transactionMockData } from '../mockApi/mockData';

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

export const AppContext = createContext<AppContextInterface | null>(null);

export const App = () => {
  const [transactions, setTransactions] = useState<TransactionsRawData | null>(
    null,
  );

  const geTransactionsData = async () => {
    try {
      // assumed this is an api call
      const data = transactionMockData;
      setTransactions(data);
    } catch (e) {
      Alert.alert(
        'Error',
        'Sorry, our server is not available at the moment.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      );
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
};

// const styles = StyleSheet.create({});
