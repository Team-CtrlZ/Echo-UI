import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/theme';
import { Typography } from '@/Typography';

const meta: Meta<typeof Typography.Display> = {
  title: 'Typography/Display',
  component: Typography.Display,
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
      options: ['xsm','sm', 'md', 'lg']
    },
    color: {
      control: 'color'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Typography.Display>;

export const Display: Story = {
  args: {
    size: 'md',
    color: 'rgba(0, 0, 0, 0.85)',
    children: 'Display'
  }
};
