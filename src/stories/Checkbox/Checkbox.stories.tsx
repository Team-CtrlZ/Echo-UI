import { Meta, StoryObj } from '@storybook/react';

import Checkbox from '@/Checkbox';
import { defaultTheme, ThemeProvider } from '@/theme';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'critical']
    },
    disabled: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unselected: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'unselected'} autoFocus={true} />;
  }
};

export const Selected: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'selected'} autoFocus={true} />;
  }
};

export const Intermediate: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'intermediate'} autoFocus={true} />;
  }
};

export const Preselected: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'preselected'} autoFocus={true} />;
  }
};
