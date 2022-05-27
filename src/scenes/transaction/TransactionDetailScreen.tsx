import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors';

import Screen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import { useRoute } from '@react-navigation/native';

export const TransactionDetailsScreen = () => {
  const route = useRoute<any>();
  return (
    <View style={styles.headerContainer}>
      <Screen style={styles.screen}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <AppText>Transaction screen</AppText>
          <AppText style={{ paddingTop: 30 }}>
            Transaction ID is {route.params?.transactionId}
          </AppText>
        </View>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingTop: 0,
  },
  container: {
    marginVertical: 20,
  },
  headerContainer: {
    flex: 1,
  },
  versionNumber: {
    padding: 50,
    alignSelf: 'center',
    color: colors.disabled,
    fontSize: 16,
  },
});
