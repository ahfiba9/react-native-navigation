import React, { useContext, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import colors from '../../styles/colors';

import Screen from '../../components/AppScreen';

export const TransactionScreen = () => {
  // const userContext = useContext(AuthContext);

  return (
    <View style={styles.headerContainer}>
      <Screen style={styles.screen}>
        <Text> Transaction screen </Text>
        <Text> Go to notifications </Text>
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
