import { JSX } from 'react';

import { useTheme } from 'styled-components';

import { Icon } from '@/icons';
import {
  Container,
  CountContent,
  EmptyHelpIcon,
  LabelContent,
  Required
} from '@/Input/Label/Label.styles';
import { LabelProps } from '@/Input/Label/Label.types';

const Label = (props: LabelProps): JSX.Element => {
  const {
    text,
    size,
    isRequired,
    isVisibleHelpIcon,
    isVisibleCount,
    currentCount,
    maxCount
  } = props;
  const theme = useTheme();
  const helpIconColor = theme.colors.semantic.light.neutral.dark.hover;

  return (
    <Container>
      <LabelContent $size={size}>
        {text}
        {isRequired && <Required $size={size}>*</Required>}
        {isVisibleHelpIcon ? (
          <Icon.Alerts
            name={'infoCircle'}
            variant={'line'}
            width={16}
            height={16}
            color={helpIconColor}
          />
        ) : (
          <EmptyHelpIcon />
        )}
      </LabelContent>
      {isVisibleCount && (
        <CountContent $size={size}>
          {currentCount}/{maxCount}
        </CountContent>
      )}
    </Container>
  );
};

export default Label;
