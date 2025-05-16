import { JSX } from 'react';

import HelpMessage from '@/Input/HelpMessage/HelpMessage';
import {
  Container,
  Form,
  LeadingIcon,
  StyledInput,
  TextField,
  TrailingIcon
} from '@/Input/Input/Input.styles';
import { InputProps } from '@/Input/Input/Input.types';
import Label from '@/Input/Label/Label';
import { ThemeProvider } from '@/theme';

const Input = (props: InputProps): JSX.Element => {
  const {
    sizeType,
    state,
    // Label
    isVisibleLabel,
    labelText,
    isRequired,
    isVisibleHelpIcon,
    // Help Message
    isVisibleHelpMessage,
    helpMessageText,
    // Text Field
    iconLeft,
    iconRight,
    // HTML Input
    disabled,
    readOnly,
    ...rest
  } = props;

  return (
    <ThemeProvider theme={{}}>
      <Container>
        {isVisibleLabel && (
          <Label
            text={labelText ?? ''}
            size={sizeType === 'xsm' ? 'xsm' : 'sm'}
            isRequired={isRequired}
            isDisabled={disabled}
            isVisibleHelpIcon={isVisibleHelpIcon}
          />
        )}
        <Form>
          <TextField $size={sizeType} $state={state || 'default'}>
            {!!iconLeft && <LeadingIcon>{iconLeft}</LeadingIcon>}
            <StyledInput
              $size={sizeType}
              $state={state || 'default'}
              disabled={disabled}
              readOnly={readOnly}
              {...rest}
            />
            {!!iconRight && <TrailingIcon>{iconRight}</TrailingIcon>}
          </TextField>
          {isVisibleHelpMessage && (
            <HelpMessage
              text={helpMessageText ?? ''}
              state={disabled ? 'disabled' : state || 'default'}
            />
          )}
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default Input;
