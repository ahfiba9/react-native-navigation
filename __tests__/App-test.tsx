/**
 * @format
 */

import 'react-native';
import React from 'react';
import { App, AppContext } from '../src/App';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';
import { transactionMockData } from '../mockApi/mockData';

describe('App', () => {
  it('renders correctly', async () => {
    await render(
      <AppContext.Provider
        value={{
          transactions: transactionMockData,
          setTransactions: jest.fn(),
        }}>
        <App />
      </AppContext.Provider>,
    );
  });
});
