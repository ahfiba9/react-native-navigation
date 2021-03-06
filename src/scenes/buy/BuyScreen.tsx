import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors';

import Screen from '../../components/AppScreen';
import AppText from '../../components/AppText';

export const BuyScreen = () => {

  return (
    <View style={styles.headerContainer}>
      <Screen style={styles.screen}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <AppText numberOfLines={0}>Buy Screen</AppText>
        </View>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
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
