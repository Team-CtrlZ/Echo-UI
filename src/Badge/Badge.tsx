import {
  Container,
  BadgeDot,
  BadgeNumber,
  BadgeText
} from '@/Badge/Badge.styles';
import { BadgeProps } from '@/Badge/Badge.types';

const Badge = (props: BadgeProps) => {
  const { variant, size, outlined } = props;

  return (
    <Container>
      {variant === 'dot' && <BadgeDot $size={size} $outlined={outlined} />}
      {variant === 'number' && (
        <BadgeNumber $size={size} $outlined={outlined} />
      )}
      {variant === 'text' && <BadgeText $size={size} $outlined={outlined} />}
    </Container>
  );
};

export default Badge;
