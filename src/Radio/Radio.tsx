import React, { useEffect, useState } from 'react';

import Unselected from '@/Radio/index';
import { StyledRadio } from '@/Radio/Radio.styles';
import { RadioButtonState, RadioProps } from '@/Radio/Radio.types';
import Selected from '@/Radio/Selected';

const Radio = (props: RadioProps) => {
  const { state, isSelected, disabled, ...rest } = props;
  const [buttonState, setButtonState] = useState<RadioButtonState>(state);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || state === 'critical') return;
    event.preventDefault();
    setButtonState('hover');
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || state === 'critical') return;
    event.preventDefault();
    setButtonState('default');
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || state === 'critical') return;
    event.preventDefault();
    setButtonState('pressed');
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || state === 'critical') return;
    event.preventDefault();
    setButtonState('hover');
  };

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (disabled || state === 'critical') return;
    event.preventDefault();
    setButtonState('focused');
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (disabled || state === 'critical') return;
    event.preventDefault();
    setButtonState('default');
  };

  useEffect(() => {
    if (disabled) return;
    setButtonState(state);
  }, [state, disabled]);

  return (
    <StyledRadio
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      {...rest}
    >
      {isSelected ? (
        <Selected state={buttonState} />
      ) : (
        <Unselected state={buttonState} />
      )}
    </StyledRadio>
  );
};

export default Radio;
