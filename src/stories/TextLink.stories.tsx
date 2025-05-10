import { Meta, StoryObj } from '@storybook/react';

import TextLink from '@/TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'TextLink',
  component: TextLink,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm']
    },
    text: {
      control: 'text'
    },
    isTrailingIcon: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Example: Story = {
  args: {
    theme: 'primary',
    size: 'md',
    text: 'Text Link',
    isTrailingIcon: true
  },
  render: (args) => {
    const { isTrailingIcon, size } = args;

    return (
      <TextLink
        {...args}
        icon={
          isTrailingIcon ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size === 'sm' ? 16 : 20}
              height={size === 'sm' ? 16 : 20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6726 9.41074C12.998 9.73618 12.998 10.2638 12.6726 10.5893L8.50591 14.7559C8.18048 15.0814 7.65284 15.0814 7.3274 14.7559C7.00196 14.4305 7.00196 13.9028 7.3274 13.5774L10.9048 10L7.3274 6.42259C7.00196 6.09715 7.00196 5.56951 7.3274 5.24408C7.65284 4.91864 8.18048 4.91864 8.50591 5.24408L12.6726 9.41074Z"
                fill="currentColor"
              />
            </svg>
          ) : undefined
        }
      />
    );
  }
};
