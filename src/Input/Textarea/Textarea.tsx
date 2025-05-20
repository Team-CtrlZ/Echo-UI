import React, { useRef } from 'react';

import HelpMessage from '@/Input/HelpMessage/HelpMessage';
import Label from '@/Input/Label/Label';
import {
  Container,
  Form,
  StyledTextarea,
  TextField
} from '@/Input/Textarea/Textarea.styles';
import { TextareaProps } from '@/Input/Textarea/Textarea.types';
import { ThemeProvider } from '@/theme';

const Textarea = (props: TextareaProps) => {
  const {
    sizeType,
    state,
    isVisibleLabel,
    labelText,
    isRequired,
    isVisibleHelpIcon,
    isVisibleCount,
    maxCount,
    currentCount,
    isVisibleHelpMessage,
    helpMessageText,
    disabled,
    readOnly,
    ...rest
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResize = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (!textareaRef.current) return;
    event.preventDefault();

    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <ThemeProvider theme={{}}>
      <Container>
        {isVisibleLabel && (
          <Label
            text={labelText ?? ''}
            size={sizeType}
            isDisabled={disabled ?? false}
            isRequired={isRequired}
            isVisibleHelpIcon={isVisibleHelpIcon}
            isVisibleCount={isVisibleCount}
            currentCount={currentCount}
            maxCount={maxCount}
          />
        )}
        <Form $size={sizeType} $state={state || 'default'}>
          <TextField $size={sizeType} $state={state || 'default'}>
            <StyledTextarea
              $state={state}
              $size={sizeType}
              ref={textareaRef}
              disabled={disabled}
              readOnly={readOnly}
              onInput={handleResize}
              {...rest}
            />
          </TextField>
          {isVisibleHelpMessage && (
            <HelpMessage
              text={helpMessageText ?? ''}
              state={disabled ? 'disabled' : state}
            />
          )}
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default Textarea;
