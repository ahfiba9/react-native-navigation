import React from 'react';
import { NavigationContainerRef, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

/**
 * If you want to use this function,
 * see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 * @param routeName
 * @param params
 */
export const globalNavigate = (routeName: any, params: any = {}) => {
  navigationRef.current?.navigate(routeName, params);
};

export const getGlobalNavigator = (): NavigationContainerRef<any> | null => {
  return navigationRef.current;
};

export interface NavigationProps<S = any> {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<Partial<{ routeProp: S }> & Record<any, any>, 'routeProp'>;
}

export const resetStack = (
  routeName: string,
  navigation: NavigationProps['navigation'],
  params?: any,
) => {
  navigation.reset({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
};
