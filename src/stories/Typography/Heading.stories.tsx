import { Meta, StoryObj } from '@storybook/react';

import {defaultTheme, ThemeProvider} from '@/theme';
import { Typography } from '@/Typography';

const meta: Meta<typeof Typography.Heading> = {
  title: 'Typography/Heading',
  component: Typography.Heading,
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
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xsm']
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

type Story = StoryObj<typeof Typography.Heading>;

export const Heading: Story = {
  args: {
    size: 'md',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.85)',
    children: 'Heading'
  }
};
