import {
  Container,
  BadgeDot,
  BadgeNumber,
  BadgeText
} from '@/Badge/Badge.styles';
import { BadgeProps } from '@/Badge/Badge.types';

const Badge = (props: BadgeProps) => {
  const { variant, size, outlined, style, children, ...rest } = props;

  return (
    <Container $variant={variant} style={{ ...style }}>
      {variant === 'dot' && (
        <BadgeDot $size={size} $outlined={outlined || false} {...rest} />
      )}
      {variant === 'number' && (
        <BadgeNumber $size={size} $outlined={outlined || false} {...rest}>
          {children}
        </BadgeNumber>
      )}
      {variant === 'text' && (
        <BadgeText $size={size} $outlined={outlined || false} {...rest}>
          {children}
        </BadgeText>
      )}
    </Container>
  );
};

export default Badge;
