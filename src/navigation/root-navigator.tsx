import { createStaticNavigation, type StaticParamList } from '@react-navigation/native';
import { createBlankStackNavigator } from 'react-native-screen-transitions/blank-stack';

import { HomeScreen } from '@/screens/home-screen';
import { RedScreen } from '@/screens/red-screen';

export const RootStack = createBlankStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    gestureEnabled: false,
  },
  screens: {
    Home: HomeScreen,
    Red: RedScreen,
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
