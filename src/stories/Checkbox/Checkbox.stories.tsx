import { Meta, StoryObj } from '@storybook/react';

import Checkbox from '@/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
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
    return <Checkbox {...args} status={'unselected'} />;
  }
};

export const Selected: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'selected'} />;
  }
};

export const Intermediate: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'intermediate'} />;
  }
};

export const Preselected: Story = {
  args: {
    state: 'default',
    disabled: false
  },
  render: (args) => {
    return <Checkbox {...args} status={'preselected'} />;
  }
};
