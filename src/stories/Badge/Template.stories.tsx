import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import Badge from '@/Badge';
import { ThemeProvider } from '@/theme';
import { Typography } from '@/Typography';

const Background = styled.div`
  padding: 32px;
  border-radius: 8px;
  border: 1px dashed rgba(123, 97, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(123, 97, 255, 0.3);
`;

const DefaultContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  height: fit-content;
  padding: 0;
`;

const DotContainer = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 100px;
  border: ${({ theme }) =>
    `1px solid ${theme.colors.components.light.border.tertiary}`};
  background: ${({ theme }) => theme.colors.components.light.bg.brand};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.components.light.text.inverse};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.typography.semantic.heading.xsm!.fontSize};
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.25px;
  line-height: ${({ theme }) =>
    theme.typography.semantic.heading.xsm!.lineHeight};
`;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm']
    },
    variant: {
      control: 'radio',
      options: ['dot', 'number', 'text']
    },
    outlined: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'dot',
    size: 'md',
    outlined: false
  },
  render: (args) => {
    const { variant } = args;
    return (
      <ThemeProvider theme={{}}>
        <Background>
          <DefaultContainer>
            {variant === 'text' ? (
              <>
                <p style={{ fontWeight: 600 }}>AI 챗봇</p>
                <Badge {...args} children={<p>New</p>} />
              </>
            ) : (
              <>
                {variant === 'dot' ? (
                  <>
                    <DotContainer>가나</DotContainer>

                    <Badge {...args} />
                  </>
                ) : (
                  <>
                    <div style={{ padding: '12px' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.7588 2H16.2414C17.0464 1.99999 17.7107 1.99998 18.2519 2.04419C18.814 2.09012 19.3307 2.18868 19.8161 2.43597C20.5687 2.81947 21.1806 3.43139 21.5641 4.18404C21.8114 4.66937 21.91 5.18608 21.9559 5.74817C22.0001 6.28936 22.0001 6.95372 22.0001 7.75868V13.2413C22.0001 14.0463 22.0001 14.7106 21.9559 15.2518C21.91 15.8139 21.8114 16.3306 21.5641 16.816C21.1806 17.5686 20.5687 18.1805 19.8161 18.564C19.3307 18.8113 18.814 18.9099 18.2519 18.9558C17.7107 19 17.0464 19 16.2414 19H13.6838C13.0197 19 12.8263 19.0047 12.6504 19.0408C12.4738 19.0771 12.303 19.137 12.1425 19.219C11.9826 19.3007 11.8286 19.4178 11.31 19.8327L8.89688 21.7632C8.7132 21.9102 8.52597 22.06 8.36137 22.1689C8.20394 22.273 7.8987 22.4593 7.50172 22.4597C7.0449 22.4602 6.61276 22.2525 6.32778 21.8955C6.08012 21.5852 6.03492 21.2305 6.01785 21.0425C6 20.846 6.00005 20.6062 6.00009 20.371L6.0001 18.9918C5.60829 18.9789 5.27229 18.9461 4.96482 18.8637C3.58445 18.4938 2.50626 17.4156 2.13639 16.0353C1.9993 15.5236 1.99962 14.933 2.00005 14.1376C2.00007 14.0924 2.0001 14.0465 2.0001 14L2.0001 7.7587C2.00008 6.95373 2.00007 6.28937 2.04429 5.74817C2.09022 5.18608 2.18878 4.66937 2.43607 4.18404C2.81956 3.43139 3.43149 2.81947 4.18413 2.43597C4.66947 2.18868 5.18617 2.09012 5.74827 2.04419C6.28947 1.99998 6.95383 1.99999 7.7588 2ZM5.91113 4.03755C5.47272 4.07337 5.24852 4.1383 5.09212 4.21799C4.71579 4.40973 4.40983 4.7157 4.21808 5.09202C4.13839 5.24842 4.07347 5.47262 4.03765 5.91104C4.00087 6.36113 4.0001 6.94342 4.0001 7.8V14C4.0001 14.9944 4.00869 15.2954 4.06824 15.5176C4.25318 16.2078 4.79227 16.7469 5.48246 16.9319C5.70474 16.9914 6.00574 17 7.0001 17C7.55238 17 8.0001 17.4477 8.0001 18V19.9194L10.0606 18.271C10.0834 18.2528 10.1058 18.2348 10.1279 18.2171C10.55 17.8791 10.8691 17.6237 11.2326 17.4379C11.5536 17.274 11.8952 17.1541 12.2483 17.0817C12.6482 16.9996 13.0569 16.9998 13.5976 17C13.626 17 13.6547 17 13.6838 17H16.2001C17.0567 17 17.639 16.9992 18.0891 16.9624C18.5275 16.9266 18.7517 16.8617 18.9081 16.782C19.2844 16.5903 19.5904 16.2843 19.7821 15.908C19.8618 15.7516 19.9267 15.5274 19.9625 15.089C19.9993 14.6389 20.0001 14.0566 20.0001 13.2V7.8C20.0001 6.94342 19.9993 6.36113 19.9625 5.91104C19.9267 5.47262 19.8618 5.24842 19.7821 5.09202C19.5904 4.7157 19.2844 4.40973 18.9081 4.21799C18.7517 4.1383 18.5275 4.07337 18.0891 4.03755C17.639 4.00078 17.0567 4 16.2001 4H7.8001C6.94352 4 6.36122 4.00078 5.91113 4.03755Z"
                          fill="#61636F"
                        />
                      </svg>
                      <Badge
                        {...args}
                        style={{
                          transform: 'translate(50%, 25%)'
                        }}
                        children={<p>999+</p>}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </DefaultContainer>
        </Background>
      </ThemeProvider>
    );
  }
};

export const Variants: Story = {
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

          {/* Dot */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Dot</Typography.Body>
            <Typography.Body size={'sm'}>
              새로운 업데이트가 있을 경우 점으로 표현하는 유형입니다.
            </Typography.Body>

            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <DefaultContainer>
                <DotContainer>김</DotContainer>
                <Badge variant={'dot'} size={'sm'} />
              </DefaultContainer>

              <DefaultContainer style={{ margin: '12px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0098 2.8147C12.3285 2.72843 12.6643 2.72843 12.9829 2.8147C13.3509 2.91433 13.6549 3.15258 13.8866 3.3342L13.9013 3.34573L13.9646 3.39516L20.0327 8.1147C20.3589 8.368 20.6589 8.60091 20.8847 8.90613C21.0832 9.17455 21.2311 9.47693 21.3211 9.79843C21.4234 10.164 21.4231 10.5438 21.4227 10.9569L21.4227 17.4839C21.4227 17.9462 21.4227 18.3507 21.3953 18.6853C21.3663 19.0404 21.3017 19.4016 21.1235 19.7514C20.8604 20.2678 20.4405 20.6877 19.924 20.9508C19.5742 21.1291 19.213 21.1937 18.8579 21.2227C18.5233 21.25 18.1189 21.25 17.6565 21.25H7.33626C6.87388 21.25 6.46938 21.25 6.13479 21.2227C5.77969 21.1937 5.41852 21.1291 5.06871 20.9508C4.55226 20.6877 4.13238 20.2678 3.86923 19.7514C3.691 19.4016 3.6264 19.0404 3.59739 18.6853C3.57005 18.3507 3.57006 17.9462 3.57008 17.4839L3.57002 10.9568C3.56966 10.5438 3.56934 10.164 3.67167 9.79843C3.76166 9.47693 3.90955 9.17455 4.10808 8.90613C4.33382 8.60091 4.6338 8.36801 4.96006 8.1147L11.0281 3.39516L11.0914 3.34573C11.0963 3.34191 11.1012 3.33807 11.1061 3.3342C11.3379 3.15258 11.6419 2.91433 12.0098 2.8147ZM12.4964 4.73641C12.4379 4.77849 12.3584 4.83986 12.2297 4.93999L6.24034 9.59836C5.79433 9.94526 5.72678 10.0087 5.68155 10.0699C5.62458 10.1469 5.58214 10.2337 5.55632 10.326C5.53581 10.3992 5.52716 10.4915 5.52716 11.0565V17.4456C5.52716 17.9564 5.52793 18.2805 5.54798 18.5259C5.56711 18.7601 5.59881 18.835 5.61301 18.8629C5.68852 19.0111 5.80901 19.1316 5.95721 19.2071C5.98508 19.2213 6.05999 19.253 6.29416 19.2721C6.53954 19.2921 6.86363 19.2929 7.37448 19.2929H8.86857L8.86857 13.7045C8.86855 13.4842 8.86853 13.2645 8.88385 13.077C8.90084 12.8691 8.94138 12.617 9.07148 12.3616C9.24996 12.0113 9.53475 11.7266 9.88504 11.5481C10.1404 11.418 10.3925 11.3774 10.6004 11.3604C10.7879 11.3451 11.0076 11.3451 11.228 11.3452H13.7647C13.9851 11.3451 14.2048 11.3451 14.3924 11.3604C14.6002 11.3774 14.8524 11.418 15.1077 11.5481C15.458 11.7266 15.7428 12.0113 15.9213 12.3616C16.0513 12.617 16.0919 12.8691 16.1089 13.077C16.1242 13.2645 16.1242 13.4842 16.1242 13.7046L16.1242 19.2929H17.6182C18.1291 19.2929 18.4532 19.2921 18.6986 19.2721C18.9327 19.253 19.0076 19.2213 19.0355 19.2071C19.1837 19.1316 19.3042 19.0111 19.3797 18.8629C19.3939 18.835 19.4256 18.7601 19.4448 18.5259C19.4648 18.2805 19.4656 17.9564 19.4656 17.4456V11.0565C19.4656 10.4915 19.4569 10.3992 19.4364 10.326C19.4106 10.2337 19.3681 10.1469 19.3112 10.0699C19.2659 10.0087 19.1984 9.94526 18.7524 9.59836L12.7631 4.93999C12.6343 4.83986 12.5548 4.77849 12.4964 4.73641ZM10.8302 13.3068C10.8261 13.4004 10.8257 13.5302 10.8257 13.7366C10.8257 13.9431 10.8257 19.2929 10.8257 19.2929H14.1671V13.7366C14.1671 13.5302 14.1666 13.4004 14.1625 13.3068C14.0689 13.3027 13.9392 13.3023 13.7327 13.3023H11.26C11.0536 13.3023 10.9238 13.3027 10.8302 13.3068Z"
                    fill="#61636F"
                  />
                </svg>
                <Badge variant={'dot'} size={'sm'} />
              </DefaultContainer>

              <DefaultContainer>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    color: '#3A9583',
                    padding: '10px 16px',
                    borderBottom: '2px solid #3A9583'
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <Typography.Label size={'sm'}>Label</Typography.Label>
                    <Badge
                      variant={'dot'}
                      size={'sm'}
                      style={{
                        transform: 'translate(100%,-50%)'
                      }}
                    />
                  </div>
                </div>
              </DefaultContainer>
            </div>
          </div>

          {/* Number */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Number</Typography.Body>
            <Typography.Body size={'sm'}>
              서비스 항목의 업데이트 수, 새로운 알림등을 숫자로 카운팅하여
              노출하는 유형입니다.
              <br />
              아이콘+배지 조합을 권장합니다.
            </Typography.Body>

            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <DefaultContainer style={{ margin: '12px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.0505 3.05025C8.36326 1.7375 10.1437 1 12.0002 1C13.8568 1 15.6372 1.7375 16.95 3.05025C18.2628 4.36301 19.0002 6.14349 19.0002 8C19.0002 10.9127 19.7323 12.8439 20.4996 14.0771L20.5114 14.096C20.8687 14.6703 21.1512 15.1243 21.3417 15.4547C21.4371 15.6202 21.524 15.7797 21.5884 15.9215C21.6205 15.9922 21.6564 16.079 21.6845 16.1733C21.7078 16.2515 21.7522 16.4187 21.7356 16.6223C21.7244 16.7591 21.6965 16.9928 21.5624 17.2343C21.4282 17.4758 21.2445 17.623 21.1342 17.7047C20.884 17.8904 20.5965 17.9329 20.5006 17.947L20.4962 17.9477C20.3488 17.9695 20.1815 17.9804 20.0127 17.9869C19.6775 18 19.2133 18 18.6361 18H5.3644C4.78717 18 4.32303 18 3.98778 17.9869C3.81902 17.9804 3.65174 17.9695 3.50433 17.9477L3.4999 17.947C3.40397 17.9329 3.11654 17.8904 2.86626 17.7047C2.75601 17.623 2.57229 17.4758 2.43814 17.2343C2.30398 16.9928 2.27609 16.7591 2.2649 16.6223C2.24825 16.4187 2.29266 16.2515 2.31596 16.1733C2.34405 16.079 2.38 15.9922 2.41212 15.9215C2.47649 15.7797 2.56342 15.6202 2.65884 15.4547C2.84926 15.1243 3.13173 14.6703 3.48903 14.0961L3.50087 14.0771C4.26824 12.8439 5.00025 10.9127 5.00025 8C5.00025 6.14348 5.73775 4.36301 7.0505 3.05025ZM12.0002 3C10.6742 3 9.4024 3.52678 8.46472 4.46447C7.52703 5.40215 7.00025 6.67392 7.00025 8C7.00025 11.2677 6.17319 13.5681 5.19896 15.1337C4.98611 15.4758 4.80847 15.7614 4.66333 15.9988C4.86991 16 5.11023 16 5.3891 16H18.6114C18.8903 16 19.1306 16 19.3372 15.9988C19.192 15.7614 19.0144 15.4758 18.8015 15.1337C17.8273 13.5681 17.0002 11.2677 17.0002 8C17.0002 6.67392 16.4735 5.40215 15.5358 4.46447C14.5981 3.52678 13.3263 3 12.0002 3ZM5.19728 1.80858C5.46868 2.28958 5.29877 2.89952 4.81777 3.17092C3.871 3.70513 3.28334 4.72298 3.29409 5.81001C3.29955 6.36227 2.85628 6.81438 2.30402 6.81984C1.75177 6.8253 1.29965 6.38203 1.29419 5.82978C1.27624 4.01411 2.25355 2.32136 3.83494 1.42907C4.31594 1.15767 4.92588 1.32758 5.19728 1.80858ZM18.7992 1.80859C19.0706 1.32759 19.6806 1.15768 20.1616 1.42908C21.743 2.32137 22.7203 4.01412 22.7023 5.82978C22.6969 6.38204 22.2448 6.82531 21.6925 6.81985C21.1402 6.81439 20.697 6.36227 20.7024 5.81001C20.7132 4.72299 20.1255 3.70514 19.1788 3.17093C18.6978 2.89953 18.5278 2.28959 18.7992 1.80859ZM8.60469 20.3383C8.97015 19.9242 9.60209 19.8848 10.0162 20.2503C10.5456 20.7176 11.2387 21 12.0002 21C12.7618 21 13.4549 20.7176 13.9843 20.2503C14.3984 19.8848 15.0303 19.9242 15.3958 20.3383C15.7613 20.7523 15.7219 21.3843 15.3078 21.7497C14.427 22.5272 13.2676 23 12.0002 23C10.7329 23 9.5735 22.5272 8.69269 21.7497C8.27862 21.3843 8.23922 20.7523 8.60469 20.3383Z"
                    fill="#61636F"
                  />
                </svg>
                <Badge variant={'number'} size={'sm'}>
                  <Typography.Label size={'xsm'}>3</Typography.Label>
                </Badge>
              </DefaultContainer>

              <DefaultContainer style={{ margin: '12px' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.7588 2H16.2414C17.0464 1.99999 17.7107 1.99998 18.2519 2.04419C18.814 2.09012 19.3307 2.18868 19.8161 2.43597C20.5687 2.81947 21.1806 3.43139 21.5641 4.18404C21.8114 4.66937 21.91 5.18608 21.9559 5.74817C22.0001 6.28936 22.0001 6.95372 22.0001 7.75868V13.2413C22.0001 14.0463 22.0001 14.7106 21.9559 15.2518C21.91 15.8139 21.8114 16.3306 21.5641 16.816C21.1806 17.5686 20.5687 18.1805 19.8161 18.564C19.3307 18.8113 18.814 18.9099 18.2519 18.9558C17.7107 19 17.0464 19 16.2414 19H13.6838C13.0197 19 12.8263 19.0047 12.6504 19.0408C12.4738 19.0771 12.303 19.137 12.1425 19.219C11.9826 19.3007 11.8286 19.4178 11.31 19.8327L8.89688 21.7632C8.7132 21.9102 8.52597 22.06 8.36137 22.1689C8.20394 22.273 7.8987 22.4593 7.50172 22.4597C7.0449 22.4602 6.61276 22.2525 6.32778 21.8955C6.08012 21.5852 6.03492 21.2305 6.01785 21.0425C6 20.846 6.00005 20.6062 6.00009 20.371L6.0001 18.9918C5.60829 18.9789 5.27229 18.9461 4.96482 18.8637C3.58445 18.4938 2.50626 17.4156 2.13639 16.0353C1.9993 15.5236 1.99962 14.933 2.00005 14.1376C2.00007 14.0924 2.0001 14.0465 2.0001 14L2.0001 7.7587C2.00008 6.95373 2.00007 6.28937 2.04429 5.74817C2.09022 5.18608 2.18878 4.66937 2.43607 4.18404C2.81956 3.43139 3.43149 2.81947 4.18413 2.43597C4.66947 2.18868 5.18617 2.09012 5.74827 2.04419C6.28947 1.99998 6.95383 1.99999 7.7588 2ZM5.91113 4.03755C5.47272 4.07337 5.24852 4.1383 5.09212 4.21799C4.71579 4.40973 4.40983 4.7157 4.21808 5.09202C4.13839 5.24842 4.07347 5.47262 4.03765 5.91104C4.00087 6.36113 4.0001 6.94342 4.0001 7.8V14C4.0001 14.9944 4.00869 15.2954 4.06824 15.5176C4.25318 16.2078 4.79227 16.7469 5.48246 16.9319C5.70474 16.9914 6.00574 17 7.0001 17C7.55238 17 8.0001 17.4477 8.0001 18V19.9194L10.0606 18.271C10.0834 18.2528 10.1058 18.2348 10.1279 18.2171C10.55 17.8791 10.8691 17.6237 11.2326 17.4379C11.5536 17.274 11.8952 17.1541 12.2483 17.0817C12.6482 16.9996 13.0569 16.9998 13.5976 17C13.626 17 13.6547 17 13.6838 17H16.2001C17.0567 17 17.639 16.9992 18.0891 16.9624C18.5275 16.9266 18.7517 16.8617 18.9081 16.782C19.2844 16.5903 19.5904 16.2843 19.7821 15.908C19.8618 15.7516 19.9267 15.5274 19.9625 15.089C19.9993 14.6389 20.0001 14.0566 20.0001 13.2V7.8C20.0001 6.94342 19.9993 6.36113 19.9625 5.91104C19.9267 5.47262 19.8618 5.24842 19.7821 5.09202C19.5904 4.7157 19.2844 4.40973 18.9081 4.21799C18.7517 4.1383 18.5275 4.07337 18.0891 4.03755C17.639 4.00078 17.0567 4 16.2001 4H7.8001C6.94352 4 6.36122 4.00078 5.91113 4.03755Z"
                    fill="#61636F"
                  />
                </svg>
                <Badge
                  variant={'number'}
                  size={'sm'}
                  style={{
                    translate: '25% -25%'
                  }}
                >
                  <Typography.Label size={'xsm'}>999+</Typography.Label>
                </Badge>
              </DefaultContainer>
            </div>
          </div>

          {/* Text */}
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              borderRadius: '20px',
              background: '#F8F8F8'
            }}
          >
            <Typography.Body size={'md'}>Text</Typography.Body>
            <Typography.Body size={'sm'}>
              서비스가 업데이트되거나, 새로 출시되었을 경우 텍스트로 노출하는
              유형입니다.
              <br />
              텍스트+배지 조합을 권장합니다.
            </Typography.Body>

            <div
              style={{
                display: 'flex',
                padding: '24px',
                gap: '24px',
                background: '#FFF',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <DefaultContainer>
                <Typography.Body size={'md'} fontWeight={600}>
                  AI챗봇
                </Typography.Body>
                <Badge variant={'text'} size={'md'}>
                  <Typography.Label
                    size={'xsm'}
                    color={'#FFFFFF'}
                    fontWeight={600}
                  >
                    New
                  </Typography.Label>
                </Badge>
              </DefaultContainer>

              <DefaultContainer>
                <Typography.Body size={'md'} fontWeight={600}>
                  AI챗봇
                </Typography.Body>
                <Badge variant={'text'} size={'md'}>
                  <Typography.Label
                    size={'xsm'}
                    color={'#FFFFFF'}
                    fontWeight={600}
                  >
                    추천
                  </Typography.Label>
                </Badge>
              </DefaultContainer>
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
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '44px',
            background: 'rgba(123, 97, 255, 0.1)',
            border: '1px dashed #9747FF',
            justifyContent: 'center',
            borderRadius: '8px'
          }}
        >
          {/* lg */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '44px',
              alignItems: 'flex-end'
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge
                variant={'dot'}
                size={'lg'}
                style={{ position: 'static', transform: 'none' }}
              />
              <Badge
                variant={'dot'}
                size={'lg'}
                outlined={true}
                style={{ position: 'static', transform: 'none' }}
              />
            </div>
          </div>

          {/* md */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '44px',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge
                variant={'dot'}
                size={'md'}
                style={{
                  position: 'relative',
                  right: 0,
                  top: 0,
                  transform: 'none'
                }}
              />
              <Badge
                variant={'dot'}
                size={'md'}
                outlined={true}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge
                variant={'number'}
                size={'md'}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              >
                <p>2</p>
              </Badge>
              <Badge
                variant={'number'}
                size={'md'}
                outlined={true}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              >
                <p>2</p>
              </Badge>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge variant={'text'} size={'md'}>
                <p>New</p>
              </Badge>
              <Badge variant={'text'} size={'md'} outlined={true}>
                <p>New</p>
              </Badge>
            </div>
          </div>

          {/* sm */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '44px',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge
                variant={'dot'}
                size={'sm'}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              />
              <Badge
                variant={'dot'}
                size={'sm'}
                outlined={true}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge
                variant={'number'}
                size={'sm'}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              >
                <p>2</p>
              </Badge>
              <Badge
                variant={'number'}
                size={'sm'}
                outlined={true}
                style={{
                  position: 'static',
                  transform: 'none'
                }}
              >
                <p>2</p>
              </Badge>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px'
              }}
            >
              <Badge variant={'text'} size={'sm'}>
                <p>New</p>
              </Badge>
              <Badge variant={'text'} size={'sm'} outlined={true}>
                <p>New</p>
              </Badge>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
};
