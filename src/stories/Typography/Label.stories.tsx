import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/theme';
import { Typography } from '@/Typography';

const meta: Meta<typeof Typography.Label> = {
  title: 'Typography/Label',
  component: Typography.Label,
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
      options: ['lg', 'md', 'sm', 'xsm']
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

type Story = StoryObj<typeof Typography.Label>;

export const Label: Story = {
  args: {
    size: 'md',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.85)',
    children: 'Label'
  }
};
