import { createStaticNavigation, type StaticParamList } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '@/screens/home-screen';
import { RedScreen } from '@/screens/red-screen';

export const RootStack = createStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    animation: 'none',
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Home',
      },
    },
    Red: {
      screen: RedScreen,
      options: {
        title: 'Red screen',
      },
    },
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;
type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  // The empty interface is required for React Navigation's module augmentation.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RootNavigator extends RootStackType {}
}

export const Navigation = createStaticNavigation(RootStack);
