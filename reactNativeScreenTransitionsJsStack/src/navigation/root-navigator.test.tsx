import { render, screen, userEvent } from '@testing-library/react-native';
import { describe, expect, it, jest } from '@jest/globals';

import App from '@/App';

type MockStackConfig = {
  screenOptions?: Record<string, unknown>;
  [key: string]: unknown;
};

// Blank stack lifecycle depends on UI-runtime reactions that Jest cannot run.
// Mirror its headerless, instant navigator contract here; device QA covers the real stack.
function mockCreateBlankStackNavigator(config: MockStackConfig) {
  const { createNativeStackNavigator } = jest.requireActual<
    typeof import('@react-navigation/native-stack')
  >('@react-navigation/native-stack');
  const createTestStack = createNativeStackNavigator as unknown as (
    config: MockStackConfig,
  ) => unknown;

  return createTestStack({
    ...config,
    screenOptions: {
      ...config.screenOptions,
      animation: 'none',
      headerShown: false,
    },
  });
}

jest.mock('react-native-screen-transitions/blank-stack', () => {
  return { createBlankStackNavigator: mockCreateBlankStackNavigator };
});

describe('root navigation', () => {
  it('navigates from Home to the red screen', async () => {
    const user = userEvent.setup();

    await render(<App />);

    expect(screen.getByText('React Native Screen Transitions JS Stack')).toBeVisible();

    const navigationButton = screen.getByRole('button', {
      name: 'Go to red screen',
    });

    await user.press(navigationButton);

    expect(screen.getByRole('header', { name: 'Red screen' })).toBeVisible();
    expect(screen.getByText('The blank stack navigation succeeded.')).toBeVisible();
  });
});
