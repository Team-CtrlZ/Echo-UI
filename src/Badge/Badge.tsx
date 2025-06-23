import {
  Container,
  BadgeDot,
  BadgeNumber,
  BadgeText
} from '@/Badge/Badge.styles';
import { BadgeProps } from '@/Badge/Badge.types';

const Badge = (props: BadgeProps) => {
  const { variant, size, outlined, ...rest } = props;

  return (
    <Container>
      {variant === 'dot' && <BadgeDot $size={size} $outlined={outlined} {...rest} />}
      {variant === 'number' && (
        <BadgeNumber $size={size} $outlined={outlined} {...rest} />
      )}
      {variant === 'text' && <BadgeText $size={size} $outlined={outlined} {...rest} />}
    </Container>
  );
};

export default Badge;
