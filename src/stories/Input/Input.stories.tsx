import React from 'react';

import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Icon } from '@/icons';
import { Inputs } from '@/Input';

const TrailingButton = styled.button`
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
`;

const meta: Meta<typeof Inputs.Input> = {
  title: 'Input/Input',
  component: Inputs.Input,
  argTypes: {
    sizeType: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xsm']
    },
    state: {
      control: 'select',
      options: ['default', 'error']
    },
    isVisibleLabel: { control: 'boolean' },
    labelText: { control: 'text' },
    isRequired: { control: 'boolean' },
    isVisibleHelpIcon: { control: 'boolean' },
    isVisibleHelpMessage: { control: 'boolean' },
    helpMessageText: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    value: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password']
    },
    placeholder: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Inputs.Input>;

export const PlainText: Story = {
  args: {
    sizeType: 'md',
    state: 'default',
    isVisibleLabel: true,
    labelText: 'Label',
    isRequired: true,
    isVisibleHelpIcon: true,
    disabled: false,
    readOnly: false,
    placeholder: 'Input filled',
    isVisibleHelpMessage: true,
    helpMessageText: 'Help Message'
  }
};

export const LeadingIcon: Story = {
  args: {
    sizeType: 'md',
    state: 'default',
    isVisibleLabel: true,
    labelText: 'Label',
    isRequired: true,
    isVisibleHelpIcon: true,
    disabled: false,
    readOnly: false,
    placeholder: 'Input filled',
    isVisibleHelpMessage: true,
    helpMessageText: 'Help Message'
  },
  render: function Render(args) {
    const [{ sizeType, value, state }, updateArgs] = useArgs();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: v } = event.target;
      updateArgs({ value: v });
    };

    return (
      <Inputs.Input
        onChange={handleChange}
        leadingIcon={
          <Icon.General
            color={
              state !== 'default'
                ? 'currentColor'
                : value === ''
                  ? '#00000040'
                  : 'currentColor'
            }
            height={sizeType === 'xsm' ? 16 : 20}
            width={sizeType === 'xsm' ? 16 : 20}
            name={'search'}
            variant={'line'}
          />
        }
        {...args}
      />
    );
  }
};

export const TrailingIcon: Story = {
  args: {
    sizeType: 'md',
    state: 'default',
    isVisibleLabel: true,
    labelText: 'Label',
    isRequired: true,
    isVisibleHelpIcon: true,
    disabled: false,
    readOnly: false,
    placeholder: 'Input filled',
    isVisibleHelpMessage: true,
    helpMessageText: 'Help Message'
  },
  render: function Render(args) {
    const [{ sizeType, value, state }, updateArgs] = useArgs();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: v } = event.target;
      updateArgs({ value: v });
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      updateArgs({ value: '' });
    };

    return (
      <Inputs.Input
        onChange={handleChange}
        leadingIcon={
          <Icon.General
            color={
              state !== 'default'
                ? 'currentColor'
                : value === ''
                  ? '#00000040'
                  : 'currentColor'
            }
            height={sizeType === 'xsm' ? 16 : 20}
            width={sizeType === 'xsm' ? 16 : 20}
            name={'search'}
            variant={'line'}
          />
        }
        trailingIcon={
          <TrailingButton onClick={handleClick}>
            <Icon.Alerts
              name={'xCircle'}
              variant={'filled'}
              width={sizeType === 'xsm' ? 16 : sizeType === 'sm' ? 20 : 24}
              height={sizeType === 'xsm' ? 16 : sizeType === 'sm' ? 20 : 24}
              color={'rgba(0, 0, 0, 0.25)'}
            />
          </TrailingButton>
        }
        {...args}
      />
    );
  }
};
