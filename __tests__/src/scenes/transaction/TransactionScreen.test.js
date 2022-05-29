import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { TransactionScreen } from '../../../../src/scenes/transaction/TransactionScreen';
import { AppContext } from '../../../../src/App';
import { transactionMockData } from '../../../../mockApi/mockData';

import { mockedNavigation } from '../../../../__mocks__/navigationMock';

it('render buy screen text', () => {
  const screen = render(
    <AppContext.Provider
      value={{
        transactions: transactionMockData,
      }}>
      <TransactionScreen />
    </AppContext.Provider>,
  );

  screen.getByText('Transaction screen');
});

it('should render the list of all transactions', () => {
  const screen = render(
    <AppContext.Provider
      value={{
        transactions: transactionMockData,
      }}>
      <TransactionScreen />
    </AppContext.Provider>,
  );

  transactionMockData.transactions.forEach(item => {
    screen.getByText(`Transaction ${item.id}`);
  });
});

it('should navigate to transaction screen with transaction id as parameter', () => {
  const screen = render(
    <AppContext.Provider
      value={{
        transactions: transactionMockData,
      }}>
      <TransactionScreen />
    </AppContext.Provider>,
  );

  transactionMockData.transactions.forEach(item => {
    const transactionButton = screen.getByTestId(`transactionButton${item.id}`);

    fireEvent.press(transactionButton);

    expect(mockedNavigation).toHaveBeenCalledWith('Transaction', {
      transactionId: item.id,
    });
  });
});
