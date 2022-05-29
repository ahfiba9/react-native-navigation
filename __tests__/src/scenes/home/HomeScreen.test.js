import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import colors from '../../../../src/styles/colors';
import { HomeScreen } from '../../../../src/scenes/home/HomeScreen';
import { mockedNavigation } from '../../../../__mocks__/navigationMock';

it('should render home screen text', () => {
  const screen = render(<HomeScreen />);

  screen.getByText('Home screen');
  screen.getByText('Go to notifications');
});

it('should navigate to notification screen when go to notification button is pressed', async () => {
  const screen = render(<HomeScreen />);

  const {
    _fiber: {
      stateNode: {
        props: { style: notificationButtonStyle },
      },
    },
  } = await screen.getByText('Go to notifications');

  const notificationButton = screen.getByText('Go to notifications');

  expect(notificationButtonStyle[1].color).toBe(colors.primary);

  fireEvent.press(notificationButton);

  expect(mockedNavigation).toBeCalledWith('Notification');
});
