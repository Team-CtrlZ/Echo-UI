import { BadgeContainer, Container } from '@/Avatar/Avatar.styles';
import { AvatarProps } from '@/Avatar/Avatar.types';

const Badge = ({ size, radius }: { size: number; radius: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
  >
    <circle cx={radius} cy={radius} r={radius} fill="#3D76FE" />
  </svg>
);

const Avatar = (props: AvatarProps) => {
  const { size, color, children, isVisibleBadge } = props;

  const getBadgeSize = (): number => {
    switch (size) {
      case '2xl':
        return 10;
      case 'xl':
      case 'lg':
        return 8;
      case 'md':
      case 'sm':
      case 'xsm':
        return 6;
      default:
        return 0;
    }
  };

  const getBadgeRadius = (): number => {
    switch (size) {
      case '2xl':
        return 5;
      case 'xl':
      case 'lg':
        return 4;
      case 'md':
      case 'sm':
      case 'xsm':
        return 3;
      default:
        return 0;
    }
  };

  return (
    <Container $size={size} $color={color}>
      {children}
      {isVisibleBadge && (
        <BadgeContainer>
          <Badge size={getBadgeSize()} radius={getBadgeRadius()} />
        </BadgeContainer>
      )}
    </Container>
  );
};

export default Avatar;
