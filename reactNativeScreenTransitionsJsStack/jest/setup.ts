import 'react-native-gesture-handler/jestSetup';

import { jest } from '@jest/globals';

jest.mock('react-native-worklets', () => jest.requireActual('react-native-worklets/src/mock'));

const { setUpTests } = jest.requireActual<typeof import('react-native-reanimated')>(
  'react-native-reanimated',
);

setUpTests();

jest.mock('react-native-safe-area-context', () =>
  jest.requireActual<{ default: unknown }>('react-native-safe-area-context/jest/mock').default,
);
