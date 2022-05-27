import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../styles/colors';

import Screen from '../../components/AppScreen';
import AppText from '../../components/AppText';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToNotification = () => {
    navigation.navigate('Notification');
  };
  return (
    <View style={styles.headerContainer}>
      <Screen style={styles.screen}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <AppText>Profile screen</AppText>
          <AppText
            style={{ color: colors.primary, paddingTop: 10 }}
            onPress={navigateToNotification}>
            Go to notifications
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
