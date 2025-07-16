import { Meta, StoryObj } from '@storybook/react';

import Radio from '@/Radio';
import { ThemeProvider } from '@/theme';

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    state: {
      options: ['default', 'critical'],
      control: 'select'
    },
    isSelected: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Template: Story = {
  args: {
    state: 'default',
    isSelected: false,
    disabled: false
  },
  render: (args) => (
    <ThemeProvider>
      <Radio {...args} />
    </ThemeProvider>
  )
};
