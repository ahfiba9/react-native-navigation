import React from 'react';
import { render } from '@testing-library/react-native';
import { TransactionDetailsScreen } from '../../../../src/scenes/transaction/TransactionDetailScreen';
import { useRoute } from '../../../../__mocks__/@react-navigation/native';

it('should render transaction screen text with transaction id', () => {
  const mockTransactionId = 'T100';

  useRoute.mockReturnValue({
    params: { transactionId: mockTransactionId },
  });

  const screen = render(<TransactionDetailsScreen />);

  screen.getByText('Transaction screen');
  screen.getByText(`Transaction ID is ${mockTransactionId}`);
});
