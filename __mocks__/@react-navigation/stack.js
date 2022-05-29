module.exports = {
  createNavigatorFactory: jest.requireActual('@react-navigation/native')
    .createNavigatorFactory,
  createStackNavigator: jest.fn(),
};
