import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { AppContext } from '../../../../src/App';
import { NotificationScreen } from '../../../../src/scenes/notification/NotificationScreen';
import { transactionMockData } from '../../../../mockApi/mockData';

import { mockedNavigation } from '../../../../__mocks__/navigationMock';

it('render notification screen text', () => {
  const screen = render(
    <AppContext.Provider
      value={{
        transactions: transactionMockData,
      }}>
      <NotificationScreen />
    </AppContext.Provider>,
  );

  screen.getByText('Notifications screen');
});

it('should render the list of all unread notifications', () => {
  const screen = render(
    <AppContext.Provider
      value={{
        transactions: transactionMockData,
      }}>
      <NotificationScreen />
    </AppContext.Provider>,
  );

  transactionMockData.transactions.forEach(item => {
    if (item.notification_read) {
      return;
    }

    screen.getByText(`Unread notification - Transaction ID ${item.id}`);
  });
});

it('should navigate to transaction screen with transaction id as parameter', () => {
  const screen = render(
    <AppContext.Provider
      value={{
        transactions: transactionMockData,
      }}>
      <NotificationScreen />
    </AppContext.Provider>,
  );

  transactionMockData.transactions.forEach(item => {
    if (item.notification_read) {
      return;
    }

    const transactionButton = screen.getByTestId(`transactionButton${item.id}`);

    fireEvent.press(transactionButton);

    expect(mockedNavigation).toHaveBeenCalledWith('Transaction', {
      transactionId: item.id,
    });
  });
});
