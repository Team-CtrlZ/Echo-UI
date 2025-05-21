import { Meta, StoryObj } from '@storybook/react';

import { Inputs } from '@/Input';

const meta: Meta<typeof Inputs.Textarea> = {
  title: 'Input/Textarea',
  component: Inputs.Textarea,
  argTypes: {
    sizeType: {
      control: 'select',
      options: ['md', 'sm', 'xsm']
    },
    state: {
      control: 'select',
      options: ['default', 'error']
    },
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    readOnly: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Inputs.Textarea>;

export const PlainText: Story = {
  args: {
    sizeType: 'md',
    state: 'default',
    disabled: false,
    placeholder: 'Textarea placeholder...'
  }
};

export const Label: Story = {
  args: {
    sizeType: 'md',
    state: 'default',
    labelText: 'Text',
    readOnly: false,
    disabled: false,
    placeholder: 'Textarea placeholder...',
    isRequired: true,
    isVisibleHelpIcon: true,
    isVisibleHelpMessage: true,
    helpMessageText: 'Help Message'
  },
  argTypes: {
    labelText: {
      control: 'text'
    },
    isRequired: {
      control: 'boolean'
    },
    isVisibleHelpIcon: {
      control: 'boolean'
    },
    isVisibleHelpMessage: {
      control: 'boolean'
    },
    helpMessageText: {
      control: 'text'
    }
  },
  render: function Render(args) {
    return <Inputs.Textarea isVisibleLabel={true} {...args} />;
  }
};

export const Count: Story = {
  args: {
    sizeType: 'md',
    state: 'default',
    labelText: 'Text',
    readOnly: false,
    disabled: false,
    placeholder: 'Textarea placeholder...',
    isRequired: true,
    isVisibleHelpIcon: true,
    isVisibleHelpMessage: true,
    helpMessageText: 'Help Message',
    isVisibleCount: true,
    currentCount: 0,
    maxCount: 100
  },
  argTypes: {
    labelText: {
      control: 'text'
    },
    isRequired: {
      control: 'boolean'
    },
    isVisibleHelpIcon: {
      control: 'boolean'
    },
    isVisibleHelpMessage: {
      control: 'boolean'
    },
    helpMessageText: {
      control: 'text'
    },
    isVisibleCount: {
      control: 'boolean'
    },
    currentCount: {
      control: 'number'
    },
    maxCount: {
      control: 'number'
    }
  },
  render: function Render(args) {
    return <Inputs.Textarea isVisibleLabel={true} {...args} />;
  }
};
