// src/stories/Button.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import Button, { ButtonSize, ButtonTheme } from '@/Button';
import { ThemeProvider } from '@/theme';
import { Typography } from '@/Typography';

const Container = styled.div<{ $size: ButtonSize }>`
  display: flex;
  gap: ${(props) => (props.$size === 'xl' ? '3px' : '2px')};
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.$size === 'sm' ? '16px' : props.$size === 'xl' ? '24px' : '20px'};
  height: ${(props) =>
    props.$size === 'sm' ? '16px' : props.$size === 'xl' ? '24px' : '20px'};
`;

const Dot = styled.div<{ $size: ButtonSize; $theme: ButtonTheme }>`
  position: relative;
  background: currentColor;
  border-radius: 100%;
  width: ${(props) =>
    props.$size === 'sm' ? '4px' : props.$size === 'xl' ? '6px' : '5px'};
  height: ${(props) =>
    props.$size === 'sm' ? '4px' : props.$size === 'xl' ? '6px' : '5px'};
  aspect-ratio: 1;

  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    background: ${(props) =>
      props.$theme === 'primary' || props.$theme === 'critical'
        ? '#FFFFFF'
        : '#898C9D'};
    border-radius: 100%;
    width: ${(props) =>
      props.$size === 'sm' ? '4px' : props.$size === 'xl' ? '6px' : '5px'};
    height: ${(props) =>
      props.$size === 'sm' ? '4px' : props.$size === 'xl' ? '6px' : '5px'};
    aspect-ratio: 1;
  }

  &::before {
    left: ${(props) =>
      props.$size === 'sm' ? '-6px' : props.$size === 'xl' ? '-9px' : '-7px'};
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: -200ms;
  }

  &::after {
    left: ${(props) =>
      props.$size === 'sm' ? '6px' : props.$size === 'xl' ? '9px' : '7px'};
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 400ms;
  }

  @keyframes dot-flashing {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm']
    },
    paddingType: {
      control: 'select',
      options: [
        'default',
        'iconOnly',
        'iconLeft',
        'iconRight',
        'iconBoth',
        'loading'
      ]
    },
    disabled: {
      control: 'boolean'
    },
    theme: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'critical',
        'secondaryText',
        'neutralOutline'
      ]
    },
    isCompact: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    theme: 'primary',
    size: 'lg',
    paddingType: 'default',
    disabled: false,
    isCompact: false,
    children: <p>Button</p>
  },
  render: (args) => {
    const { paddingType, size, theme } = args;
    return (
      <ThemeProvider>
        <Button {...args}>
          {(() => {
            switch (paddingType) {
              case 'default':
              default:
                return 'BUTTON';
              case 'iconOnly':
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size === 'sm' ? '16' : size === 'xl' ? '24' : '20'}
                    height={size === 'sm' ? '16' : size === 'xl' ? '24' : '20'}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.99398 3.09748C8.04406 1.39341 5.16035 1.0447 2.92093 2.95811C0.498605 5.02779 0.146663 8.51347 2.06218 10.9783C2.78928 11.914 4.20844 13.3196 5.57229 14.6069C6.9521 15.9093 8.32872 17.14 9.00761 17.7412L9.02053 17.7527C9.08436 17.8092 9.16383 17.8797 9.24 17.937C9.33121 18.0057 9.46213 18.091 9.63696 18.1431C9.86939 18.2125 10.1192 18.2125 10.3517 18.1431C10.5265 18.091 10.6574 18.0057 10.7486 17.937C10.8248 17.8797 10.9043 17.8092 10.9681 17.7527L10.981 17.7412C11.6599 17.14 13.0365 15.9093 14.4163 14.6069C15.7802 13.3196 17.1993 11.914 17.9264 10.9783C19.8346 8.52294 19.537 5.01038 17.059 2.9508C14.7946 1.06878 11.9417 1.39276 9.99398 3.09748ZM9.36104 4.82152C7.94015 3.16038 5.68159 2.79152 4.00359 4.22524C2.25083 5.72283 2.01498 8.20148 3.37818 9.95564C4.01409 10.7739 5.33892 12.0948 6.7163 13.3949C8.00217 14.6086 9.28841 15.7621 9.99431 16.3886C10.7002 15.7621 11.9864 14.6086 13.2723 13.3949C14.6497 12.0948 15.9745 10.7739 16.6104 9.95564C17.981 8.19201 17.7625 5.70272 15.9937 4.23254C14.2712 2.80093 12.0422 3.16772 10.6276 4.82152C10.4693 5.00661 10.2379 5.11317 9.99431 5.11317C9.75074 5.11317 9.51936 5.00661 9.36104 4.82152Z"
                      fill="currentColor"
                    />
                  </svg>
                );
              case 'iconLeft':
                return (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={size === 'sm' ? '16' : size === 'xl' ? '24' : '20'}
                      height={
                        size === 'sm' ? '16' : size === 'xl' ? '24' : '20'
                      }
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99398 3.09748C8.04406 1.39341 5.16035 1.0447 2.92093 2.95811C0.498605 5.02779 0.146663 8.51347 2.06218 10.9783C2.78928 11.914 4.20844 13.3196 5.57229 14.6069C6.9521 15.9093 8.32872 17.14 9.00761 17.7412L9.02053 17.7527C9.08436 17.8092 9.16383 17.8797 9.24 17.937C9.33121 18.0057 9.46213 18.091 9.63696 18.1431C9.86939 18.2125 10.1192 18.2125 10.3517 18.1431C10.5265 18.091 10.6574 18.0057 10.7486 17.937C10.8248 17.8797 10.9043 17.8092 10.9681 17.7527L10.981 17.7412C11.6599 17.14 13.0365 15.9093 14.4163 14.6069C15.7802 13.3196 17.1993 11.914 17.9264 10.9783C19.8346 8.52294 19.537 5.01038 17.059 2.9508C14.7946 1.06878 11.9417 1.39276 9.99398 3.09748ZM9.36104 4.82152C7.94015 3.16038 5.68159 2.79152 4.00359 4.22524C2.25083 5.72283 2.01498 8.20148 3.37818 9.95564C4.01409 10.7739 5.33892 12.0948 6.7163 13.3949C8.00217 14.6086 9.28841 15.7621 9.99431 16.3886C10.7002 15.7621 11.9864 14.6086 13.2723 13.3949C14.6497 12.0948 15.9745 10.7739 16.6104 9.95564C17.981 8.19201 17.7625 5.70272 15.9937 4.23254C14.2712 2.80093 12.0422 3.16772 10.6276 4.82152C10.4693 5.00661 10.2379 5.11317 9.99431 5.11317C9.75074 5.11317 9.51936 5.00661 9.36104 4.82152Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Button</span>
                  </>
                );
              case 'iconRight':
                return (
                  <>
                    <span>Button</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={size === 'sm' ? '16' : size === 'xl' ? '24' : '20'}
                      height={
                        size === 'sm' ? '16' : size === 'xl' ? '24' : '20'
                      }
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99398 3.09748C8.04406 1.39341 5.16035 1.0447 2.92093 2.95811C0.498605 5.02779 0.146663 8.51347 2.06218 10.9783C2.78928 11.914 4.20844 13.3196 5.57229 14.6069C6.9521 15.9093 8.32872 17.14 9.00761 17.7412L9.02053 17.7527C9.08436 17.8092 9.16383 17.8797 9.24 17.937C9.33121 18.0057 9.46213 18.091 9.63696 18.1431C9.86939 18.2125 10.1192 18.2125 10.3517 18.1431C10.5265 18.091 10.6574 18.0057 10.7486 17.937C10.8248 17.8797 10.9043 17.8092 10.9681 17.7527L10.981 17.7412C11.6599 17.14 13.0365 15.9093 14.4163 14.6069C15.7802 13.3196 17.1993 11.914 17.9264 10.9783C19.8346 8.52294 19.537 5.01038 17.059 2.9508C14.7946 1.06878 11.9417 1.39276 9.99398 3.09748ZM9.36104 4.82152C7.94015 3.16038 5.68159 2.79152 4.00359 4.22524C2.25083 5.72283 2.01498 8.20148 3.37818 9.95564C4.01409 10.7739 5.33892 12.0948 6.7163 13.3949C8.00217 14.6086 9.28841 15.7621 9.99431 16.3886C10.7002 15.7621 11.9864 14.6086 13.2723 13.3949C14.6497 12.0948 15.9745 10.7739 16.6104 9.95564C17.981 8.19201 17.7625 5.70272 15.9937 4.23254C14.2712 2.80093 12.0422 3.16772 10.6276 4.82152C10.4693 5.00661 10.2379 5.11317 9.99431 5.11317C9.75074 5.11317 9.51936 5.00661 9.36104 4.82152Z"
                        fill="currentColor"
                      />
                    </svg>
                  </>
                );
              case 'iconBoth':
                return (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={size === 'sm' ? '16' : size === 'xl' ? '24' : '20'}
                      height={
                        size === 'sm' ? '16' : size === 'xl' ? '24' : '20'
                      }
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99398 3.09748C8.04406 1.39341 5.16035 1.0447 2.92093 2.95811C0.498605 5.02779 0.146663 8.51347 2.06218 10.9783C2.78928 11.914 4.20844 13.3196 5.57229 14.6069C6.9521 15.9093 8.32872 17.14 9.00761 17.7412L9.02053 17.7527C9.08436 17.8092 9.16383 17.8797 9.24 17.937C9.33121 18.0057 9.46213 18.091 9.63696 18.1431C9.86939 18.2125 10.1192 18.2125 10.3517 18.1431C10.5265 18.091 10.6574 18.0057 10.7486 17.937C10.8248 17.8797 10.9043 17.8092 10.9681 17.7527L10.981 17.7412C11.6599 17.14 13.0365 15.9093 14.4163 14.6069C15.7802 13.3196 17.1993 11.914 17.9264 10.9783C19.8346 8.52294 19.537 5.01038 17.059 2.9508C14.7946 1.06878 11.9417 1.39276 9.99398 3.09748ZM9.36104 4.82152C7.94015 3.16038 5.68159 2.79152 4.00359 4.22524C2.25083 5.72283 2.01498 8.20148 3.37818 9.95564C4.01409 10.7739 5.33892 12.0948 6.7163 13.3949C8.00217 14.6086 9.28841 15.7621 9.99431 16.3886C10.7002 15.7621 11.9864 14.6086 13.2723 13.3949C14.6497 12.0948 15.9745 10.7739 16.6104 9.95564C17.981 8.19201 17.7625 5.70272 15.9937 4.23254C14.2712 2.80093 12.0422 3.16772 10.6276 4.82152C10.4693 5.00661 10.2379 5.11317 9.99431 5.11317C9.75074 5.11317 9.51936 5.00661 9.36104 4.82152Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Button</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={size === 'sm' ? '16' : size === 'xl' ? '24' : '20'}
                      height={
                        size === 'sm' ? '16' : size === 'xl' ? '24' : '20'
                      }
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99398 3.09748C8.04406 1.39341 5.16035 1.0447 2.92093 2.95811C0.498605 5.02779 0.146663 8.51347 2.06218 10.9783C2.78928 11.914 4.20844 13.3196 5.57229 14.6069C6.9521 15.9093 8.32872 17.14 9.00761 17.7412L9.02053 17.7527C9.08436 17.8092 9.16383 17.8797 9.24 17.937C9.33121 18.0057 9.46213 18.091 9.63696 18.1431C9.86939 18.2125 10.1192 18.2125 10.3517 18.1431C10.5265 18.091 10.6574 18.0057 10.7486 17.937C10.8248 17.8797 10.9043 17.8092 10.9681 17.7527L10.981 17.7412C11.6599 17.14 13.0365 15.9093 14.4163 14.6069C15.7802 13.3196 17.1993 11.914 17.9264 10.9783C19.8346 8.52294 19.537 5.01038 17.059 2.9508C14.7946 1.06878 11.9417 1.39276 9.99398 3.09748ZM9.36104 4.82152C7.94015 3.16038 5.68159 2.79152 4.00359 4.22524C2.25083 5.72283 2.01498 8.20148 3.37818 9.95564C4.01409 10.7739 5.33892 12.0948 6.7163 13.3949C8.00217 14.6086 9.28841 15.7621 9.99431 16.3886C10.7002 15.7621 11.9864 14.6086 13.2723 13.3949C14.6497 12.0948 15.9745 10.7739 16.6104 9.95564C17.981 8.19201 17.7625 5.70272 15.9937 4.23254C14.2712 2.80093 12.0422 3.16772 10.6276 4.82152C10.4693 5.00661 10.2379 5.11317 9.99431 5.11317C9.75074 5.11317 9.51936 5.00661 9.36104 4.82152Z"
                        fill="currentColor"
                      />
                    </svg>
                  </>
                );
              case 'loading':
                return (
                  <Container $size={size}>
                    <Dot
                      $size={size}
                      $theme={theme}
                      className={'loader__dot'}
                    />
                  </Container>
                );
            }
          })()}
        </Button>
      </ThemeProvider>
    );
  }
};

export const Variants: Story = {
  args: {
    theme: 'primary',
    size: 'lg',
    paddingType: 'default',
    disabled: false,
    isCompact: false,
    children: <p>Button</p>
  },
  render: () => {
    return (
      <ThemeProvider>
        <div
          style={{
            minWidth: '716px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}
        >
          <Typography.Heading size={'md'}>Type</Typography.Heading>

          {/* Primary */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Primary</Typography.Body>
            <Typography.Body size={'sm'}>
              배경색이 채워진 버튼으로, 강조해야할 주요 액션에 사용됩니다. CTA
              버튼
            </Typography.Body>
            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF'
              }}
            >
              <Button size={'xl'} theme={'primary'} paddingType={'default'}>
                <p>BUTTON</p>
              </Button>
              <Button
                size={'xl'}
                theme={'primary'}
                paddingType={'default'}
                disabled={true}
              >
                <p>BUTTON</p>
              </Button>
            </div>
          </div>

          {/* Critical */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Critical</Typography.Body>
            <Typography.Body size={'sm'}>
              파괴적인 동작 시 경고로 사용됩니다.
            </Typography.Body>
            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF'
              }}
            >
              <Button size={'xl'} theme={'critical'} paddingType={'default'}>
                <p>BUTTON</p>
              </Button>
              <Button
                size={'xl'}
                theme={'critical'}
                paddingType={'default'}
                disabled={true}
              >
                <p>BUTTON</p>
              </Button>
            </div>
          </div>

          {/* Secondary */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Secondary</Typography.Body>
            <Typography.Body size={'sm'}>
              보조 버튼은 페이지의 주요 초점이 아닌 동작에 사용됩니다.
            </Typography.Body>
            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF'
              }}
            >
              <Button size={'xl'} theme={'secondary'} paddingType={'default'}>
                <p>BUTTON</p>
              </Button>
              <Button
                size={'xl'}
                theme={'secondary'}
                paddingType={'default'}
                disabled={true}
              >
                <p>BUTTON</p>
              </Button>
            </div>
          </div>

          {/* Neutral Outline (Tertiary) */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>
              Neutral Outline (Tertiary)
            </Typography.Body>
            <Typography.Body size={'sm'}>
              보조 버튼은 페이지의 주요 초점이 아닌 동작에 사용됩니다.
            </Typography.Body>
            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF'
              }}
            >
              <Button
                size={'xl'}
                theme={'neutralOutline'}
                paddingType={'default'}
              >
                <p>BUTTON</p>
              </Button>
              <Button
                size={'xl'}
                theme={'neutralOutline'}
                paddingType={'default'}
                disabled={true}
              >
                <p>BUTTON</p>
              </Button>
            </div>
          </div>

          {/* Secondary Text */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Secondary text</Typography.Body>
            <Typography.Body size={'sm'}>
              가장 낮은 위계로 사용되며, 다양한 액션이 제공될 되어야 할 때
              사용됩니다. 카드, 모달 등
            </Typography.Body>
            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF'
              }}
            >
              <Button
                size={'xl'}
                theme={'secondaryText'}
                paddingType={'default'}
              >
                <p>BUTTON</p>
              </Button>
              <Button
                size={'xl'}
                theme={'secondaryText'}
                paddingType={'default'}
                disabled={true}
              >
                <p>BUTTON</p>
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    return (
      <ThemeProvider>
        <div
          style={{ display: 'inline-flex', alignItems: 'center', gap: '24px' }}
        >
          {/* Primary */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '113px',
              gap: '20px'
            }}
          >
            <Button paddingType={'default'} size={'xl'} theme={'primary'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'lg'} theme={'primary'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'md'} theme={'primary'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'sm'} theme={'primary'}>
              BUTTON
            </Button>
          </div>

          {/* Critical */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '113px',
              gap: '20px'
            }}
          >
            <Button paddingType={'default'} size={'xl'} theme={'critical'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'lg'} theme={'critical'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'md'} theme={'critical'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'sm'} theme={'critical'}>
              BUTTON
            </Button>
          </div>

          {/* Secondary */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '113px',
              gap: '20px'
            }}
          >
            <Button paddingType={'default'} size={'xl'} theme={'secondary'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'lg'} theme={'secondary'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'md'} theme={'secondary'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'sm'} theme={'secondary'}>
              BUTTON
            </Button>
          </div>

          {/* Neutral Outline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '113px',
              gap: '20px'
            }}
          >
            <Button
              paddingType={'default'}
              size={'xl'}
              theme={'neutralOutline'}
            >
              BUTTON
            </Button>
            <Button
              paddingType={'default'}
              size={'lg'}
              theme={'neutralOutline'}
            >
              BUTTON
            </Button>
            <Button
              paddingType={'default'}
              size={'md'}
              theme={'neutralOutline'}
            >
              BUTTON
            </Button>
            <Button
              paddingType={'default'}
              size={'sm'}
              theme={'neutralOutline'}
            >
              BUTTON
            </Button>
          </div>

          {/* Secondary Text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '113px',
              gap: '20px'
            }}
          >
            <Button paddingType={'default'} size={'xl'} theme={'secondaryText'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'lg'} theme={'secondaryText'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'md'} theme={'secondaryText'}>
              BUTTON
            </Button>
            <Button paddingType={'default'} size={'sm'} theme={'secondaryText'}>
              BUTTON
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
