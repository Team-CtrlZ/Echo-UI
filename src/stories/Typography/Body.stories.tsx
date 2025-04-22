import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/theme';
import { Typography } from '@/Typography';

const meta: Meta<typeof Typography.Body> = {
  title: 'Typography/Body',
  component: Typography.Body,
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
      options: ['xsm', 'sm', 'md', 'lg']
    },
    color: {
      control: 'color'
    },
    fontWeight: {
      control: 'number'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Typography.Body>;

export const Body: Story = {
  args: {
    size: 'md',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.85)',
    children: 'Body'
  }
};
