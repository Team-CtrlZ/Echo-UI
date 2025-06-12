import { Meta, StoryObj } from '@storybook/react';

import Avatar from '@/Avatar';
import { ThemeProvider } from '@/theme';

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xsm']
    },
    color: {
      control: 'color'
    },
    isVisibleBadge: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Text: Story = {
  argTypes: {
    children: {
      control: 'text'
    }
  },
  args: {
    size: '2xl',
    isVisibleBadge: true,
    children: '가나'
  },
  render: (args) => {
    const { children } = args;

    return (
      <ThemeProvider>
        <Avatar {...args}>{children}</Avatar>
      </ThemeProvider>
    );
  }
};

export const Icon: Story = {
  args: {
    size: 'xl',
    isVisibleBadge: true
  },
  render: (args) => {
    const { size } = args;
    const getIconSize = () => {
      switch (size) {
        case 'xl':
          return 36;
        case 'lg':
          return 24;
        case 'md':
          return 20;
        case 'sm':
          return 16;
        case 'xsm':
          return 12;
        default:
          return 0;
      }
    };

    return (
      <ThemeProvider>
        <Avatar {...args}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={getIconSize()}
            height={getIconSize()}
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.94664 24.5597C12.2907 23.2108 15.1207 22.5 18 22.5C20.8792 22.5 23.7092 23.2108 26.0533 24.5597C28.3965 25.9082 30.1781 27.8554 31.0036 30.166C31.2823 30.9461 30.8759 31.8045 30.0957 32.0832C25.9018 33.5815 10.0981 33.5815 5.9042 32.0832C5.12406 31.8045 4.71758 30.9461 4.9963 30.166C5.8218 27.8554 7.60346 25.9082 9.94664 24.5597Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5 12C10.5 7.85786 13.8578 4.5 18 4.5C22.1421 4.5 25.5 7.85786 25.5 12C25.5 16.1421 22.1421 19.5 18 19.5C13.8578 19.5 10.5 16.1421 10.5 12Z"
              fill="white"
            />
          </svg>
        </Avatar>
      </ThemeProvider>
    );
  }
};
