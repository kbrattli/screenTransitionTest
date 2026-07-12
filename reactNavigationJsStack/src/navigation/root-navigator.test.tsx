import { render, screen, userEvent } from '@testing-library/react-native';
import { describe, expect, it } from '@jest/globals';

import App from '@/App';

describe('root navigation', () => {
  it('navigates from Home to the red screen', async () => {
    const user = userEvent.setup();

    await render(<App />);

    expect(screen.getByText('React Navigation JS Stack')).toBeVisible();

    const navigationButton = screen.getByRole('button', {
      name: 'Go to red screen',
    });

    await user.press(navigationButton);

    expect(screen.getByRole('header', { name: 'Red screen' })).toBeVisible();
    expect(screen.getByText('The JavaScript stack navigation succeeded.')).toBeVisible();
  });
});
