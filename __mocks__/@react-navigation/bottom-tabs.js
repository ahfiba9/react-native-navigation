module.exports = {
  createNavigatorFactory: jest.requireActual('@react-navigation/native')
    .createNavigatorFactory,
  createBottomTabNavigator: jest.fn(),
};
