import React from 'react';
import { render } from '@testing-library/react-native';
import { BuyScreen } from '../../../../src/scenes/buy/BuyScreen';

it('render buy screen text', () => {
  const screen = render(<BuyScreen />);

  screen.getByText('Buy Screen');
});
