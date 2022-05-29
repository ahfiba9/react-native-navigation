const { mockedNavigation } = require('../navigationMock');

module.exports = {
  useNavigation: () => ({
    navigate: mockedNavigation,
  }),
  useRoute: jest.fn(),
  createNavigatorFactory: jest.requireActual('@react-navigation/native')
    .createNavigatorFactory,
  useNavigationBuilder: jest.requireActual('@react-navigation/native')
    .useNavigationBuilder,
  NavigationContainer: () => null,
};
