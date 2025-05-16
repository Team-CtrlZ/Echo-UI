import React, { JSX, useEffect, useState } from 'react';

import { StyledButton } from '@/Checkbox/Checkbox.styles';
import { CheckboxProps, CheckboxUiState } from '@/Checkbox/Checkbox.types';
import Intermediate from '@/Checkbox/Intermediate';
import Preselected from '@/Checkbox/Preselected';
import Selected from '@/Checkbox/Selected';
import Unselected from '@/Checkbox/Unselected';

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { state, status, disabled, ...rest } = props;
  const [buttonState, setButtonState] = useState<CheckboxUiState>(state);

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
    <StyledButton
      {...rest}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoFocus={true}
    >
      {(() => {
        switch (status) {
          case 'unselected':
            return <Unselected state={disabled ? 'disabled' : buttonState} />;
          case 'selected':
            return <Selected state={disabled ? 'disabled' : buttonState} />;
          case 'intermediate':
            return <Intermediate state={disabled ? 'disabled' : buttonState} />;
          case 'preselected':
            return <Preselected state={disabled ? 'disabled' : buttonState} />;
          default:
            return null;
        }
      })()}
    </StyledButton>
  );
};

export default Checkbox;
