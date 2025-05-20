import { Meta, StoryObj } from '@storybook/react';

import { defaultTheme, ThemeProvider } from '@/theme';
import { Typography } from '@/Typography';

const meta: Meta<typeof Typography.Button> = {
  title: 'Typography/Button',
  component: Typography.Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm']
    },
    color: {
      control: 'color'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Typography.Button>;

export const Button: Story = {
  args: {
    size: 'md',
    color: 'rgba(0, 0, 0, 0.85)',
    children: 'Button'
  }
};
