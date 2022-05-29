import React, { useContext } from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';

import colors from '../../styles/colors';

import Screen from '../../components/AppScreen';
import { AppContext, TransactionsRawDataDetails } from '../../App';
import AppText from '../../components/AppText';
import { useNavigation } from '@react-navigation/native';

export const NotificationScreen = () => {
  const appContext = useContext(AppContext);
  const navigation = useNavigation<any>();

  const navigateToTransaction = (id: string) => {
    navigation.navigate('Transaction', {
      transactionId: id,
    });
  };

  const renderNotifications = ({
    item: { id, notification_read },
  }: {
    item: TransactionsRawDataDetails;
  }) => {
    if (notification_read) {
      return null;
    }

    return (
      <AppText
        testID={`transactionButton${id}`}
        style={{ color: colors.primary, paddingTop: 10 }}
        onPress={() => navigateToTransaction(id)}>
        Unread notification - Transaction ID {id}
      </AppText>
    );
  };

  return (
    <View style={styles.headerContainer}>
      <Screen style={styles.screen}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: Dimensions.get('window').height / 3,
          }}>
          <AppText> Notifications screen </AppText>
          <FlatList
            data={appContext?.transactions?.transactions}
            keyExtractor={index => index.id}
            renderItem={renderNotifications}
          />
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
